const navConf = require('./navConf.js');
// const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  title: '感性的大熊猫',
  description: '学习笔记',
  plugins: ['@vuepress/back-to-top',
            '@vuepress/last-updated',
            'vuepress-plugin-mathjax',
            {
              target: 'chtml',
              macros: {
                '*': '\\times',
              },
            },
  ],
  base: '/Notes/',
  repo: 'iScottMark/Notes',
  themeConfig: {
    nav: navConf,
    displayAllHeaders: false,
    lastUpdated: '最后更新于',
    sidebarDepth: 2,
    collapsable: true,
    
    // 侧边栏 （又臭又长）
    sidebar: {
      // 先导
      '/guide/': [
      '',
      '10-rules',
      '20-docs',
      ],
      /* ------------ */
      
      // 日常记录-2021年
      '/daily/2021/': [
      '',
      '10-Jan',
      ],
      /* ------------ */

      // Python
      '/Python/': [
        '',
        '2-函数',
        '3-高级特性',
        '4-函数式编程',
        '5-模块'
      ],
      /* ------------ */

      // PPT
      '/hobby/PPT/': [
        {
          title: 'PPT小白',
          children: ['green-01', 'green-02', 'green-03']
        },     
      ],
      /* ------------ */

      // 资源库
      '/hobby/library/': [
        '',
        'PPT',
        'toolkit',
        'course',
      ],
      /* ------------ */

      // 收藏
      '/collections/': [
        '',
      ],
      /* ------------ */

     

    },
    /* =================================================== */
  }
}
