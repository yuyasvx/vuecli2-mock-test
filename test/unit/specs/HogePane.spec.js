import { mount } from '@vue/test-utils'
import HogePane from '../../../src/components/HogePane.vue'
import hogeApi from '../../../src/api/hoge'
import sinon from 'sinon'

describe('HogePane.vue', () => {
  // const sandbox = sinon.sandbox.create()

  beforeEach(() => {
    // sandbox.restore()
  })
  it('should be called API properly', done => {
    const wrapper = mount(HogePane)
    const hogeApiMock = sinon
      .mock(hogeApi)
      .expects('executeApi')
      .resolves('aaa')

    wrapper.find('#hoge-button').trigger('click')
    wrapper.vm.$nextTick(() => {
      hogeApiMock.verify()
      done()
      hogeApiMock.restore()
    })
  })
})
