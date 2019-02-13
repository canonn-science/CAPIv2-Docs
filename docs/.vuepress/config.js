module.exports = {
  title: 'CAPIv2 - Documentation',
  description: 'Public documentation for the Canonn API v2',
  ga: '',
  theme: 'dark-new',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Canonn', link: 'https://canonn.science' },
      { text: 'Github', link: 'https://github.com/canonn-science' }
    ],
    sidebar: [
      {
        collapsable: false,
        title: 'Home',
        children: [
          '/home/about'
        ],
      },
      {
        collapsable: true,
        title: '🚀 Sites',
        children: [
          '/site/what-is-a-site',
          '/site/barkmoundsites',
          '/site/braintreesites'
        ],
      },
      {
        collapsable: true,
        title: '💻 Reporting',
        children: [
          '/report/reporting-to-canonn',
          '/report/barkmoundreports',
          '/report/braintreereports'
        ],
      },
      {
        collapsable: true,
        title: '🏗 Tools',
        children: [
          '/tool/capiv2.md',
          '/tool/updater',
          '/tool/athena',
          '/tool/athens'
        ]
      }
    ]
  }
}
