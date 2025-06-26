// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
let config = {
  title: 'Langki',
  tagline: 'The Swiss Army knife for language learning in Anki.',
  favicon: 'img/like-award-favorite-star-svgrepo-com.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },


  // Set the production url of your site here
  url: 'https://langki.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrntn161', // Usually your GitHub org/user name.
  projectName: 'Langki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      vi: {
        label: 'Tiếng Việt',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'collection',
        routeBasePath: 'collection', 
        path: './collection',        
        blogTitle: 'Collection',
        blogDescription: 'Langki Collection',
        showReadingTime: false,
        blogSidebarCount: 0,
        postsPerPage: 'ALL',
      },
    ],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.jpg',
      navbar: {
        title: 'Langki',
        logo: {
          alt: 'Langki',
          src: 'img/like-award-favorite-star-svgrepo-com.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/collection',
            label: 'Collection',
            position: 'left',
          },{
              to: '/contact',      // This will link to yoursite.com/contact
              label: 'Contact',
              position: 'left',   // Or 'right' if you prefer
          },{
            to: '/subscription', // Đường dẫn này sẽ khớp với tên tệp src/pages/subscription.js
            label: 'Pricing',
            position: 'left', // Hoặc 'right' tùy bạn muốn
          },{
            type: 'search', // Docusaurus sẽ tự động dùng local search đã cấu hình
            position: 'right',
          },{
            type: 'localeDropdown',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/installation',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/nguyen.thien.nghia.364641',
              },
              {
                label: 'WhatsApp',
                href: 'https://wa.me/84385169963',
              },
              {
                label: 'Email',
                href: 'mailto:mrntn281@gmail.com',
              },
            ],
          },
          {
            title: 'Collection',
            items: [
              {
                label: 'Collection',
                to: '/collection',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Langki, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
