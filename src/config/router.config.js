// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: 'workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '工作台', icon: 'ant-design', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
// export const constantRouterMap = [
//   {
//     path: '/user',
//     component: UserLayout,
//     redirect: '/user/login',
//     hidden: true,
//     children: [
//       {
//         path: 'login',
//         name: 'login',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
//       },
//       {
//         path: 'register-result',
//         name: 'registerResult',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
//       },
//       {
//         path: 'recover',
//         name: 'recover',
//         component: undefined
//       }
//     ]
//   },
//
//   {
//     path: '/test',
//     component: BlankLayout,
//     redirect: '/test/home',
//     children: [
//       {
//         path: 'home',
//         name: 'TestHome',
//         component: () => import('@/views/Home')
//       }
//     ]
//   },
//
//   {
//     path: '/404',
//     component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
//   }
//
// ]
