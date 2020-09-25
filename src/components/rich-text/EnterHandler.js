import {Extension, Plugin} from 'tiptap';

export default class EnterHandler extends Extension {
    constructor(method) {
        super();
        this.method = method;
    }
    get name() {
        return 'enter_handler';
    }
    get plugins() {
        return [
            new Plugin({
                props: {
                    handleKeyDown: (view, event) => {
                        const {schema, tr} = view.state;
                        if (event.key === 'Enter' && !event.shiftKey && !event.altKey) {
                            if (
                                view.docView.node.content &&
                                view.docView.node.content.content &&
                                view.docView.node.content.content.length > 0 &&
                                (view.docView.node.content.content[0].type.name === 'bullet_list' || view.docView.node.content.content[0].type.name === 'ordered_list')
                            ) {
                                console.log('Skip sending message for list');
                            } else {
                                this.method();
                            }
                            return false;
                        } else if (event.key === 'Enter' && event.altKey) {
                            const hardBreak = schema.nodes.hard_break;
                            const transaction = tr.replaceSelectionWith(hardBreak.create()).scrollIntoView();
                            view.dispatch(transaction);
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            })
        ];
    }
}
