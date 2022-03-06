import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloWorld from './HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

// the async is to wait when needed
test('mount component', async () => {
  expect(HelloWorld).toBeTruthy();
  
  // the first argument is the compononent that we wanna mount and second is anything that whe wanna pass.
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello from Vitest'
    }
  })

  expect(wrapper.text()).toContain('Hello from Vitest')
})

test('button click', async () => {
  expect(HelloWorld).toBeTruthy();
  
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello from Vitest'
    }
  })

  // testing the button triggering an click event
  await wrapper.get('button').trigger('click')
  expect(wrapper.text()).toContain('count is: 1')

  await wrapper.get('button').trigger('click')
  expect(wrapper.text()).toContain('count is: 2')
})


