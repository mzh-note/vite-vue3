import { handleParam } from '@/utils'

export const top: any = window.top

export const LOGOUT = () => {
  window.parent.postMessage(JSON.stringify({ type: 'LOGOUT' }), '*')
}
/**s
 * goto 所有页面的跳转，包含不限于打开普通页面、iframe页面
 * @param { string } target 跳转的url，
 * target主要有以下几种类型：
 * 1、jgj-portal     /portal/micro/migrate-web/ClientListApplicationExport（客户列表申请导出），
 * 2、crm-web        /portal/micro/crm-web/securitiesConsole（业务工作台）
 * 3、mot            /portal/micro/mot/mot-new/mot_ui（MOT提醒列表）
 * 菜单本身属性配置为 type=INTERNAL 的 target 主要有以下几种类型：
 * 4、srcSys=JGJ    /portal/micro/up-form/StartWorkflow/xxx
 * 5、srcSys=JGJ    /portal/micro/up-form/ShowWorkflow/xxx
 * 6、srcSys=JGJ    /portal/micro/up-form/UIProcessor/xxx
 * 7、srcSys=AUM    /portal/micro/aum/UIProcessor/Table/xxx
 * 8、srcSys=AUM    /portal/micro/aum/workflow?xxx
 * 其他类型：
 * 9、企微工单       /portal/general-process?
 * 10、单客户查询    /portal/micro/external/ccb/ccbGFSingleCustomerManage
 * 11、财富平台      /portal/micro/wealth/xxx
 * @param { object } params 可选，url携带的参数对象
 * @param { string } title 可选，页面标题，建议任何页面均传递明确的标题
 * @param { boolean } changeNavMenu 可选，打开页面时是否需要定位左侧菜单项，默认为 false
 */
export const goto = (target: string, params?: any, title?: string, changeNavMenu?: boolean) => {
  console.log(
    `goto，【target】: ${target}`,
    `，【params】: ${params && handleParam(params)}`,
    `，【title】: ${title}`,
    `，【complete target】: ${target + `${params ? `${target.includes('?') ? '&' : '?'}${handleParam(params)}` : ''}`}`
  )
  if (top.MenuOps) {
    top.MenuOps.openTab({
      target: target + `${params ? `${target.includes('?') ? '&' : '?'}${handleParam(params)}` : ''}`,
      title,
      changeNavMenu,
    })
  }
}
// 替换标签页
export const replaceTab = (params: { target: string; title: string }) => {
  if (top && top.MenuOps && top.MenuOps.replaceTab) {
    top.MenuOps.replaceTab(params)
  }
}
// 分享标签页
export const shareTab = (params: { code: string }) => {
  if (top && top.MenuOps && top.MenuOps.shareTab) {
    top.MenuOps.shareTab(params)
  }
}

// 关闭当前标签页
export const closeCurrentTab = () => {
  if (top.MenuOps && top.MenuOps.closeCurrentTab) {
    top.MenuOps.closeCurrentTab()
  }
}
