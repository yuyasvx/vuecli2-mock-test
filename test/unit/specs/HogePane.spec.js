import { mount } from '@vue/test-utils'
import HogePane from '../../../src/components/HogePane.vue'
import hogeApi from '../../../src/api/hoge'
import sinon from 'sinon'

describe('HogePane.vue', () => {
  // const sandbox = sinon.sandbox.create()

  let hogeApiMock
  beforeEach(() => {
    // sandbox.restore()
    hogeApiMock = sinon
      .mock(hogeApi)
      .expects('executeApi')
      .resolves('aaa')
  })
  it('should be called API properly', done => {
    const wrapper = mount(HogePane)

    wrapper.find('#hoge-button').trigger('click')
    wrapper.vm.$nextTick(() => {
      hogeApiMock.verify()
      done()
    })
  })
  afterEach(() => {
    hogeApiMock.restore()
  })
})
