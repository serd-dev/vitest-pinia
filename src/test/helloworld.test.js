import { mount } from '@vue/test-utils';
import HelloWorld from "../components/HelloWorld.vue"

describe('HelloWorld.vue', () => {
  it('renders HelloWorld with initial value of 0', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('0');
  });

  it('increments count when increment button is clicked', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find('button:nth-child(3)').trigger('click');
    expect(wrapper.text()).toContain('1');
  });

  it('decrements count when decrement button is clicked', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find('button:nth-child(1)').trigger('click');
    expect(wrapper.text()).toContain('-1');
  });
});
