

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'table', component: () => import('pages/Home/TablePage.vue') },
      { path: 'about', component: () => import('pages/About/AboutPage.vue') },
      { path: 'form', component: () => import('pages/Form/FormPage.vue') },
    ]
  },
  // {
  //   path: '/about',
  //   component: () => import('pages/About/AboutPage.vue'),
  // },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
