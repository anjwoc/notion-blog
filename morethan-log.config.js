const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'anjwoc',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'backend engineer',
    bio: 'Junior Backend Engineer | South Korea',
    email: 'anjwoc@gmail.com',
    linkedin: '',
    github: 'anjwoc',
    instagram: '',
  },
  projects: [
    {
      name: '[WEB]WWW Exhibition',
      href: 'https://wwweb.kr'
    },
    {
      name: '[MOBILE]WWW Exhibition',
      href: 'https://m.wwweb.kr'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'FlyingPotato',
    description: 'welcome to anjwoc log',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: '',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: '', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'Backend', 'Spring', 'Node.js'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'anjwoc/notion-blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
