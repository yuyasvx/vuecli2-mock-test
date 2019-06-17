import { mount } from '@vue/test-utils'
import HogeForm from '../../../src/components/HogeForm.vue'
import hogeApi from '../../../src/api/hoge'
import sinon from 'sinon'

describe('HogeForm.vue', () => {
  // const sandbox = sinon.sandbox.create()

  let hogeApiMock
  let wrapper
  beforeEach(() => {
    // sandbox.restore()
    hogeApiMock = sinon
      .mock(hogeApi)
      .expects('executeApi')
      .resolves('aaa')
  })
  it('should be called API properly', done => {
    wrapper = mount(HogeForm, {
      attachToDocument: true
    })

    wrapper.find('#hoge-button').trigger('click')
    wrapper.vm.$nextTick(() => {
      hogeApiMock.verify()
      done()
    })
  })
  afterEach(() => {
    hogeApiMock.restore()
    wrapper.destroy()
  })
})
