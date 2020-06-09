import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar';
import Vue from 'vue';

describe('ProgressBar.vue', () => {
    let wrapper;
    afterEach(() => {
        wrapper.destroy();
    });
    it('should have the same height as the value of the height prop', async () => {
        wrapper = mount(ProgressBar, {
            propsData: {
                value: 50,
                height: '10px',
            }
        });
        await Vue.nextTick();

        expect(wrapper.find('.progress-bar').element.clientHeight).toEqual('10');
    });
});