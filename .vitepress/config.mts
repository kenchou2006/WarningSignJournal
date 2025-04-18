import { defineConfig } from 'vitepress'

export default defineConfig({
  root: './',
  base: '/WarningSignJournal/',
  title: "智慧定點式道路警示牌",
  description: "研究日誌",
  lang: 'zh-Hant',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    nav: [
      { text: '研究日誌', link: '/' },
      { text: '連結', link: '/link' },
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WarningSign2025' }
    ],
  },
  head: [
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon.svg', media: '(prefers-color-scheme: light)' }],
    ['link', { rel: 'icon', href: 'https://github.githubassets.com/favicons/favicon-dark.svg', media: '(prefers-color-scheme: dark)' }],
  ],
})
