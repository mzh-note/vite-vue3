// utils/spinService.ts
import { createApp, h } from 'vue'
import { Spin } from 'ant-design-vue'

let spinInstance: any = null

export const showGlobalSpin = (tip?: string) => {
  if (!spinInstance) {
    const container = document.createElement('div')
    container.style.cssText = `
      position: fixed; z-index: 9999; inset: 0;
      display: flex; justify-content: center; align-items: center;
      background: rgba(255, 255, 255, 0.5);
    `

    spinInstance = createApp({
      render() {
        return h(Spin, { tip })
      },
    }).mount(container)

    document.body.appendChild(container)
  }
}

export const hideGlobalSpin = () => {
  if (spinInstance) {
    spinInstance.$el.parentNode.remove()
    spinInstance = null
  }
}
