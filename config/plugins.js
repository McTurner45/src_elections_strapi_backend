module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('dayaxfbib'),
      api_key: env('946929139396933'),
      api_secret: env('wKJaQvTieGAwAHWfkuyvpYWzQGU'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
