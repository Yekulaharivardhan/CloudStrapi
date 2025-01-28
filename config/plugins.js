module.exports = () => ({
    'preview-button': {
        config: {
          enabled: true,
          contentTypes: [
            {
              uid: 'api::page.page',
              draft: {
                url: 'http://localhost:3000/api/preview',
                query: {
                  type: 'page',
                  slug: '{slug}',
                },
                openTarget: 'StrapiPreviewPage',
              },
              published: {
                url: 'http://localhost:3000/{slug}',
                openTarget: 'StrapiPage',
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
                openTarget: 'StrapiPreviewPost',
              },
              published: {
                url: 'http://localhost:3000/blog/{slug}',
                openTarget: 'StrapiPost',
              },
            },
          ],
        },
      },
});
