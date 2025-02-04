// ./config/plugins.ts`
export default () => ({
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::home.home',
            published: {
              url: 'http://localhost:3000',
            },
          },
          {
            uid: 'api::page.page',
            draft: {
              url: 'http://localhost:3000/api/preview',
              query: {
                type: 'page',
                slug: '{slug}',
              },
            },
            published: {
              url: 'http://localhost:3000/{slug}',
            },
          },
          {
            uid: 'api::post.post',
            draft: {
              url: 'http://localhost:3000/api/preview',
              query: {
                type: 'post',
                slug: '{slug}',
              },
            },
            published: {
              url: 'http://localhost:3000/blog/{slug}',
            },
          },
        ],
      },
    },
  });