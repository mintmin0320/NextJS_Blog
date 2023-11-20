/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '민트민의 개발 블로그',
  author: '민트민',
  headerTitle: '👨🏻‍💻 개발 블로그',
  description: '최근 글',
  language: 'ko',
  theme: 'system', // system, dark or light
  siteUrl: 'https://mintmin-dev-world.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/hamin.PNG',
  socialBanner: '/static/images/banner.jpeg',
  // socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'mintmin0320@gmail.com',
  github: 'https://github.com/mintmin0320',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/%ED%95%98%EB%AF%BC-%EB%B0%95-0aba16285/',
  locale: 'ko', // Main.tsx 날짜 한국어로 설정
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'ko',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      crossorigin: 'anonymous',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
