<template>
    <div class="rich-text-editor">
        <editor-content :editor="editor" />
        <div class="rich-text-editor-extensions">
            <editor-menu-bar :editor="editor" v-slot="{commands, isActive, getMarkAttrs}">
                <div class="rich-text-editor-extensions-wrapper">
                    <div class="extensions-format">
                        <button class="icon-button" :class="{active: isActive.bold()}" @click="commands.bold">
                            <Icon name="format_bold" />
                        </button>
                        <button class="icon-button" :class="{active: isActive.italic()}" @click="commands.italic">
                            <Icon name="format_italic" />
                        </button>
                        <button class="icon-button" :class="{active: isActive.strike()}" @click="commands.strike">
                            <Icon name="strikethrough_s" />
                        </button>
                        <button class="icon-button" :class="{active: isActive.bullet_list()}" @click="commands.bullet_list">
                            <Icon name="format_list_bulleted" />
                        </button>
                        <button class="icon-button" :class="{active: isActive.ordered_list()}" @click="commands.ordered_list">
                            <Icon name="format_list_numbered" />
                        </button>
                        <button class="icon-button" :class="{active: isActive.blockquote()}" @click="commands.blockquote">
                            <Icon name="format_quote" />
                        </button>
                        <Overlay :show="linkMenuIsActive" :opacity="0.4" :show-close="false">
                            <div class="link-modal">
                                <h4>Add link</h4>
                                <div class="form-group">
                                    <label for="link" class="control-label"></label>
                                    <input id="link" class="form-control" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu" />
                                </div>
                                <Button class="mr-2" type="danger" text="Delete" :action="() => setLinkUrl(commands.link, null)" />
                                <Button type="success" text="Save" :action="() => setLinkUrl(commands.link, linkUrl)" />
                            </div>
                        </Overlay>
                        <button class="icon-button" v-if="!linkMenuIsActive" @click="showLinkMenu(getMarkAttrs('link'))" :class="{active: isActive.link()}">
                            <Icon name="link" />
                        </button>
                    </div>
                    <div class="extensions-extra">
                        <button class="icon-button">
                            <Icon name="sentiment_satisfied_alt" />
                        </button>
                        <button class="icon-button">
                            <Icon name="attachment" />
                        </button>
                    </div>
                </div>
            </editor-menu-bar>
        </div>
    </div>
</template>

<script>
import Button from '../Button';
import Overlay from '../Overlay';
import {Editor, EditorContent, EditorMenuBar} from 'tiptap';
import {Blockquote, BulletList, OrderedList, Bold, Italic, Strike, Link, ListItem} from 'tiptap-extensions';
import Icon from '@/components/rich-text/Icon';
export default {
    name: 'RichText',
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    components: {
        Button,
        Icon,
        EditorMenuBar,
        EditorContent,
        Overlay
    },
    data() {
        return {
            editor: new Editor({
                content: this.options.content ? this.options.content : this.options.placeholder ? this.options.placeholder : '<p>Start typing...</p>',
                onUpdate: ({getHTML}) => {
                    this.options.content = getHTML();
                },
                extensions: [new Blockquote(), new BulletList(), new OrderedList(), new Bold(), new Italic(), new Strike(), new Link(), new ListItem()]
            }),
            linkUrl: null,
            linkMenuIsActive: false
        };
    },
    methods: {
        showLinkMenu(attrs) {
            this.linkUrl = attrs.href;
            this.linkMenuIsActive = true;
            this.$nextTick(() => {
                this.$refs.linkInput.focus();
            });
        },
        hideLinkMenu() {
            this.linkUrl = null;
            this.linkMenuIsActive = false;
        },
        setLinkUrl(command, url) {
            command({href: url});
            this.hideLinkMenu();
        }
    },
    beforeDestroy() {
        this.editor.destroy();
    }
};
</script>
