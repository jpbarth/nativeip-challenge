import { customerTags, customerPaths } from './customers';
import { cityTags, cityPaths } from './cities';

const tags = [...customerTags, ...cityTags];
const paths = { ...customerPaths, ...cityPaths };

const swaggerDocument = {
  openapi: '3.0.2',
  info: {
    title: 'Customers API',
    version: '1.0.0',
  },
  servers: [
    {
      description: 'Local server',
      url: 'http://localhost:3030/',
    },
  ],
  security: [{ BearerAuth: [] }],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      Customer: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          cityId: {
            type: 'number',
          },
          first_name: {
            type: 'string',
          },
          last_name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          gender: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          company: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
        },
      },
      CityCustomer: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          first_name: {
            type: 'string',
          },
          last_name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          company: {
            type: 'string',
          },
        },
      },
      City: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          totalCustomers: {
            type: 'number',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
      ValidationError: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'number',
          },
          error: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
          validation: {
            type: 'object',
            properties: {
              body: {
                type: 'object',
                properties: {
                  source: {
                    type: 'string',
                  },
                  keys: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  message: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  tags,
  paths,
};

export { swaggerDocument };
