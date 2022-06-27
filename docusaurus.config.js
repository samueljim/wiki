module.exports = {
  title: 'BNE Wiki',
  tagline: 'stuff that i know',
  url: 'https://wiki.bne.sh',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'samueljim', // Usually your GitHub org/user name.
  projectName: 'wiki.bne', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BNE wiki',
      logo: {
        alt: 'BNE',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/samueljim/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'My site',
              to: 'https://bne.sh',
            },
            {
              label: 'URL shorten',
              to: 'https://bne.sh/create',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/samueljim',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BNE`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/samueljim/wiki/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/samueljim/wiki/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
