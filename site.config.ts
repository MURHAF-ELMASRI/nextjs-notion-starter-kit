import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'bc466a73a6e64ecaa3d9e961260ffa9f',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Murhaf Al-masri',
  domain: 'murhaf-almasri.com',
  author: 'Murhaf Al-masri',

  // open graph metadata (optional)
  description: 'Personal site for Murhaf al-masri',

  // social usernames (optional)
  github: 'MURHAF-ELMASRI',
  linkedin: 'murhaf-elmasri',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  defaultMode: 'dark',
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'مقالات',
      pageId: 'e833ae23c2744ca18aa15460767e32f4'
    },
    {
      title: 'كتب',
      pageId: 'e56cda5667e94a888e701c92c4c8d0f3'
    },
    {
      title: 'بلدان',
      pageId: '48710a4755b54ff9bef81a4aec20d0ba'
    },
    {
      title: 'EN',
      pageId: 'bb2849d344cf4caeac7aa81be842021f'
    }
  ],

  rtlPages: [
    'bc466a73a6e64ecaa3d9e961260ffa9f',
    'e56cda56-67e9-4a88-8e70-1c92c4c8d0f3',
    'e833ae23-c274-4ca1-8aa1-5460767e32f4',
    '48710a47-55b5-4ff9-bef8-1a4aec20d0ba',
    "c150714a-5be0-4e1a-8679-5bf2b933b078",
    '12fa65c4-df2b-4fc0-850b-d098714847dc',
    '41efff2f-8e64-4d36-a376-7266203319f6'
  ]
})
