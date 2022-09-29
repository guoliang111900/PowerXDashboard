export default {
  path: '/boot',
  layout: false,
  routes: [
    {
      name: '安装系统',
      path: '/boot/install',
      component: './Boot/Install',
    },
    {
      name: '初始化Root账号',
      path: '/boot/root/init',
      component: './Boot/Root',
    },
  ],
};