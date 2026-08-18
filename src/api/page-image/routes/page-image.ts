import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::page-image.page-image', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
