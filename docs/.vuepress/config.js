module.exports = {
  title: 'CAPIv2 - Documentation',
  description: 'Public documentation for the Canonn API v2',
  ga: '',
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
        title: '🔑 Authentication',
        children: [
          '/auth/discord',
          '/auth/security'
        ],
      },
      {
        collapsable: true,
        title: '📚 API Reference',
        children: [
          '/api/3rdparty',
          '/api/environments',
          '/api/filters',
          '/api/graphql',
          '/api/swagger'
        ],
      },
      {
        collapsable: true,
        title: '🚀 Sites',
        children: [
          '/site/what-is-a-site',
          '/site/sitetypes'
        ],
      },
      {
        collapsable: true,
        title: '💻 Reporting',
        children: [
          '/report/reporting-to-canonn',
          '/report/reporttypes'
        ],
      },
      {
        collapsable: true,
        title: '⚙️️ Validation',
        children: [
          '/validation/report-to-site'
        ],
      },
      {
        collapsable: true,
        title: '🏗 Tools',
        children: [
          '/tool/capiv2',
          '/tool/updater',
          '/tool/athena',
          '/tool/athens'
        ]
      }
    ]
  }
}
