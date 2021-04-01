const navConf = require('./navConf.js');
// const sidebarConf = require('./config/sidebarConf.js');

module.exports = {
  theme: 'reco',
  title: '感性的大熊猫',
  description: '学习笔记',
  head:[     
    ['link', {rel:'shortcut icon', href:'/favicon.ico'}] 
  ],
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['flowchart'],
    ['vuepress-plugin-mathjax',
      {
        target: 'chtml',
        macros: {
          '*': '\\times',
        },
      }
    ],
  ],
  base: '/Notes/',
  repo: 'iScottMark/Notes',
  themeConfig: {
    // reco-theme
    subSidebar: 'auto',  //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    blogConfig: {
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/iScottMark' },
      ],
    },


    // default-theme
    nav: navConf,
    displayAllHeaders: false,
    lastUpdated: '最后更新于',
    sidebarDepth: 2,
    collapsable: true,

    // 侧边栏 （又臭又长）
    sidebar: {
      '/guide/': guideSidebarConf(),              // 先导
      '/daily/2021/': dailySidebarConf(),         // 日常记录-2021年
      '/Python/': pythonSidebarConf(),            // Python
      '/Git/': GitSidebarConf(),                  // Git
      '/hobby/PPT/': PPTSidebarConf(),            // PPT
      '/hobby/vocal/': vocalSidebarConf(),        // 流行唱法
      '/hobby/library/': libSidebarConf(),        // 资源库
      '/collections/': collectionsSidebarConf(),  // 收藏
      
      // '/test/': testSidebarConf(),                //  多个分组嵌套写法
    },
  }
}


// 先导
function guideSidebarConf() {
  return [
    '',
    '10-rules',
    '20-docs',
  ];
}

// 日常
function dailySidebarConf() {
  return [
    '',
    '10-Jan',
    '20-Feb',
    '30-Mar',
    '40-Apr',
  ];
}

// Python
function pythonSidebarConf() {
  return [
    {
      title: '基础篇',
      children: [
        '/Python/10-basic/intro',
      ],
      collapsable: true,
    },
    {
      title: '进阶篇',
      children: [
        '/Python/20-liao/2-函数',
        '/Python/20-liao/3-高级特性',
        '/Python/20-liao/4-函数式编程',
        '/Python/20-liao/5-模块',
        '/Python/20-liao/6-面向对象编程',
        '/Python/20-liao/7-面向对象高级编程',
        '/Python/20-liao/8-错误、调试和测试',
      ],
      collapsable: true,
    },
  ];
}

// Git
function GitSidebarConf() {
  return [
    '',
    '10-liao',
    '20-often',
    '30-merge',
    '40-re',
    '50-practice',
    '60-summary',
    '80-collect',
  ];
}

// PPT
function PPTSidebarConf() {
  return [
    {
      title: '小白篇',
      children: ['/hobby/PPT/green/green-01', '/hobby/PPT/green/green-02', '/hobby/PPT/green/green-03'],
      collapsable: false,
    },
    {
      title: '进阶篇',
      children: ['/hobby/PPT/advanced/video', ],
      collapsable: false,
    },  
    {
      title: '模仿篇',
      children: ['/hobby/PPT/exercise/exercise-01', '/hobby/PPT/exercise/exercise-02', '/hobby/PPT/exercise/others', ],
      collapsable: false,
    },  
  ];
}

// 流行唱法
function vocalSidebarConf() {
  return [
    '',
  ];
}

// 资源库
function libSidebarConf() {
  return [
    '',
    'PPT',
    'toolkit',
    'course',
  ];
}

// 收藏
function collectionsSidebarConf() {
  return [
    '',
    'wired',
  ];
}


// 测试
/*
function testSidebarConf() {
  return [
    {
      title: 'test1',
      children: [
        {
          title: 'Group1',
          children: ['/test/test1/Group1/1', ]
        },
        {
          title: 'Group2',
          children: ['/test/test1/Group2/2', ]
        },
      ],
    }, 
    
    {
      title: 'test2',
      // isolated: true,
      // initialIsolatedOpen: true,
      sidebarDepth: 0,
      children: [
        {
          title: 'Group1',
          children: ['/test/test2/1', ],
          sidebarDepth: 0,
          collapsable: true,
        },
        {
          title: 'Group2',
          children: ['/test/test2/2', ],
          sidebarDepth: 0,
        },
      ],
    },
  ];
}
*/