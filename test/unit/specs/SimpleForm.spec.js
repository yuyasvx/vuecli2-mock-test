import { mount } from '@vue/test-utils'
import SimpleForm from '../../../src/components/SimpleForm.vue'
import hogeApi from '../../../src/api/hoge'
import sinon from 'sinon'

describe('SimpleForm.vue', () => {
  // const sandbox = sinon.sandbox.create()

  let hogeApiMock
  beforeEach(() => {
    hogeApiMock = sinon
      .mock(hogeApi)
      .expects('executeApi')
      .resolves('aaa')
  })
  it('should be called API properly', done => {
    const wrapper = mount(SimpleForm)

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
