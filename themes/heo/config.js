const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-03-15', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://CONGRONGPPT.com' },
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享设计',
  HEO_HERO_TITLE_2: '学习与思考',
  HEO_HERO_TITLE_3: 'CONGRONGPPT.COM',
  HEO_HERO_TITLE_4: '2025',
  HEO_HERO_TITLE_5: '专注PPT设计，如果您有需求欢迎与我联系~',
  HEO_HERO_TITLE_LINK: 'https://congrongppt.com/service',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '作品展示', url: '/tag/作品展示' },
  HEO_HERO_CATEGORY_2: { title: '经验分享', url: '/tag/经验分享' },
  HEO_HERO_CATEGORY_3: { title: '思考感悟', url: '/tag/思考感悟' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修PPT设计与AI',
    '🏃 脚踏实地行动派',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: 'https://www.congrongppt.com',
  HEO_INFO_CARD_ICON1: 'fab fa-weixin',
  HEO_INFO_CARD_URL2: 'https://congrongppt.com',
  HEO_INFO_CARD_ICON2: 'fab fa-bilibili',
  HEO_INFO_CARD_URL3: 'https://www.congrongppt.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#ffffff',
      title_2: 'ppt',
      img_2: '/images/heo/ppt.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'MJ',
      img_1: '/images/heo/图片3.png',
      color_1: '#ffffff',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'jimeng',
      img_1: '/images/heo/jm.png',
      color_1: '#ffffff',
      title_2: 'blender',
      img_2: '/images/heo/blender.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'lib',
      img_1: '/images/heo/lib.png',
      color_1: '#ffffff',
      title_2: 'cam',
      img_2: '/images/heo/cam.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#ffffff',
      title_2: 'gpt',
      img_2: '/images/heo/gpt.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'jy',
      img_1: '/images/heo/jianying.png',
      color_1: '#ffffff',
      title_2: 'notion',
      img_2: '/images/heo/Notion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'zotero',
      img_1: '/images/heo/zotero.png',
      color_1: '#ffffff',
      title_2: 'fig',
      img_2: '/images/heo/fia.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '联系从容',
  HEO_SOCIAL_CARD_TITLE_2: '获取联系方式',
  HEO_SOCIAL_CARD_TITLE_3: '点击与我联系',
  HEO_SOCIAL_CARD_URL: 'https://congrongppt.com/contact',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
