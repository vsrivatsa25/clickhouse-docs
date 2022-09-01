/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  english: [
    'en/intro',
     {
       type: 'category',
       label: 'Get started',
       link: {
         type: 'doc',
         id: 'en/quick-start',
       },
       collapsed: true,
       items: [
           {
             type: 'doc',
             id: 'en/getting-started/install',
           },
           {
             type: 'category',
             label: 'Example Datasets',
             link: {
               type: 'generated-index',
               slug: '/en/getting-started/example-datasets'
             },
             collapsed: true,
             items: [
               {
                 type: 'autogenerated',
                 dirName: 'en/getting-started/example-datasets',
               },
               {
                 type: 'link',
                 label: 'NYPD Complaint Data',
                 href: '/en/guides/ingest/tab_separated_values',
               }
             ]
           },
       ]
      },
     {
       type: 'category',
       label: 'Connect a client',
          link: {
            type: 'generated-index',
            slug: '/en/connect-a-client',
          },
       collapsed: true,
       items: [
           {
             type: 'doc',
             id: 'en/interfaces/cli',
           },
           {
             type: 'doc',
             id: 'en/getting-started/playground',
           },
        {
          type: 'category',
          label: 'SQL clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/sql-clients',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/sql-clients',
            },
	  ],
	},
        {
          type: 'category',
          label: 'Language clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/language-clients',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/language-clients',
            },
	  ],
	},
       ]
     },
        {
          type: 'category',
          label: 'Ingest',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/data-ingestion',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/data-ingestion',
            },
	  ],
	},
        {
          type: 'category',
          label: 'Visualize',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/data-visualization',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/data-visualization',
            },
	  ],
	},
         {
          type: 'category',
          label: 'Analyze',
          link: {
            type: 'generated-index',
            slug: '/en/analyze'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/interfaces/formats',
           },
        {
          type: 'category',
          label: 'SQL reference',
          link: {
            type: 'generated-index',
            slug: '/en/sql-reference',
          },
          items: [
            {
             type: 'autogenerated',
            dirName: 'en/sql-reference',
            },
	  ],
	},
         {
          type: 'category',
          label: 'Engines',
          link: {
            type: 'generated-index',
            slug: 'en/engines'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/engines',
           }
          ]  
         },
          ]  
         },
        {
          type: 'category',
          label: 'Migrate',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/migration',
          },
          items: [
            {
             type: 'autogenerated',
             dirName: 'en/integrations/migration',
            },
          ]
        },
    {
      type: 'category',
      label: 'Manage',
          link: {
            type: 'generated-index',
            slug: '/en/manage',
          },
      collapsed: true,
      items: [
           {
             type: 'doc',
             id: 'en/operations/backup',
           },
         {
          type: 'category',
          label: 'Users',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/guides/sre/user-management',
           }
          ]  
         },
         {
          type: 'category',
          label: 'Performance',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
             type: 'doc',
             id: 'en/operations/optimizing-performance/sampling-query-profiler',
           },
           {
            type: 'autogenerated',
            dirName: 'en/guides/improving-query-performance',
           },
          ]  
         },
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Interfaces',
          link: {
            type: 'generated-index',
            slug: 'en/interfaces'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/interfaces',
           }
          ]  
         },
         {
          type: 'category',
          label: 'Development',
          link: {
            type: 'generated-index',
            slug: 'en/development'
          },
          collapsed: true,
          collapsible: true,
          items: [
           {
            type: 'autogenerated',
            dirName: 'en/development',
           },
           {
             type: 'category',
             label: 'Native protocol',
             link: {
               type: 'generated-index',
               slug: 'en/native-protocol'
             },
             collapsed: true,
             collapsible: true,
             items: [
               {
                 type: 'autogenerated',
                 dirName: 'en/native-protocol',
               }
             ]
           },
          ]  
         },

         
       ]
     },
     {
       type: 'category',
       label: 'FAQ',
       link: {
         type: 'generated-index',
         slug: '/en/faq',
       },
       collapsed: true,
       items: [
         {
          type: 'autogenerated',
          dirName: 'en/faq',
         }
       ]
      },
      {
        type: 'category',
        label: "What's New",
        link: {
          type: 'generated-index',
          slug: '/en/whats-new',
        },
        collapsed: true,
        items: [
          {
           type: 'autogenerated',
           dirName: 'en/whats-new',
          }
        ]
       },
       {
        type: 'category',
        label: 'About Us',
        link: {
          type: 'generated-index',
          slug: '/en/about-us',
        },
        collapsed: true,
        items: [
          {
           type: 'autogenerated',
           dirName: 'en/about-us',
          }
        ]
       },
      ], 
   russia: [
     {
       type: 'autogenerated',
       dirName: 'ru',
      },
    ],
    chinese: [
      {
        type: 'autogenerated',
        dirName: 'zh',
       },
     ],
 };

module.exports = sidebars;
