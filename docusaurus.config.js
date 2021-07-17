/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  /*** Site metadata ******************************************************************************/
  title: 'OviCodes',
  tagline: '',
  url: 'www-ovicodes.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  /*** Deployment configuration *******************************************************************/
  organizationName: 'OviCodes',
  projectName: 'ovicodes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  /*** Theme, plugin, and preset configuration ****************************************************/
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // @docusaurus/plugin-content-docs:
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OviCodes/ovicodes/edit/master/website/',
          routeBasePath: '/',
          // https://docusaurus.io/docs/markdown-features/plugins
          // https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
        },
        // @docusaurus/theme-classic:
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [{ src: '/scripts.js', async: true, defer: true }],
  themeConfig: {
    // announcementBar: {
    //   id: 'announcement',
    //   content: 'Temporary announcement text. <a href="/announcement">Read more...</a>',
    //   backgroundColor: '#ffba00',
    //   textColor: '#333',
    //   isCloseable: true,
    // },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/ovi.png',
    hideableSidebar: true,
    navbar: {
      style: 'dark',
      hideOnScroll: true,
      title: 'OviCodes',
      logo: {
        alt: 'OviCodes',
        src: 'img/ovi.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/about',
          position: 'left',
          label: 'About Me',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Social',
          position: 'right',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OviCodes',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/OviCodes',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ovicodes/',
            },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
      // defaultLanguage: 'javascript',
      /*
        Included languages: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
        Supported languages: https://prismjs.com/#supported-languages
      */
      additionalLanguages: ['docker', 'mongodb', 'nginx', 'pug', 'vim'],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ovidiu Ispas`,
    },
  },
}
