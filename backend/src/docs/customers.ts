const customerTags = [
  {
    name: 'Customer',
    description: 'Customers requests.',
  },
];

const customerPaths = {
  '/customer/{id}': {
    get: {
      tags: ['Customer'],
      dashboards: 'Find a customer',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Customer id',
          required: true,
          schema: {
            type: 'number',
          },
        },
      ],
      responses: {
        200: {
          description: 'Customer found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    $ref: '#/components/schemas/Customer',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Invalid ID format',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    $ref: '#/components/schemas/ValidationError',
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
          },
        },
        404: {
          description: 'Customer not found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
          },
        },
      },
    },
    put: {
      tags: ['Customer'],
      dashboards: 'Update a customer.',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Customer id',
          required: true,
          schema: {
            type: 'number',
          },
        },
      ],
      responses: {
        responses: {
          200: {
            description: 'Customer updated',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      $ref: '#/components/schemas/Customer',
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid ID format or body content',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      $ref: '#/components/schemas/ValidationError',
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      $ref: '#/components/schemas/Error',
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Customer not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      $ref: '#/components/schemas/Error',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Server error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      $ref: '#/components/schemas/Error',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export { customerTags, customerPaths };
