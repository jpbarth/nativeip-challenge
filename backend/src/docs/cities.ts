const cityTags = [
  {
    name: 'City',
    description: 'Cities requests.',
  },
];

const cityPaths = {
  '/city': {
    get: {
      tags: ['City'],
      dashboards: 'Find all cities',
      responses: {
        200: {
          description: 'Cities found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  page: {
                    type: 'number',
                  },
                  pages: {
                    type: 'number',
                  },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/City',
                    },
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
  '/city/{id}/customers': {
    get: {
      tags: ['City'],
      dashboards: 'Find city customers with paging',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'City id',
          required: true,
          schema: {
            type: 'number',
          },
        },
        {
          name: 'page',
          in: 'query',
          description: 'Selected page',
          required: false,
          schema: {
            type: 'number',
          },
        },
        {
          name: 'limit',
          in: 'query',
          description: 'Maximum results per page',
          required: false,
          schema: {
            type: 'number',
          },
        },
      ],
      responses: {
        200: {
          description: "City's customers found",
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  page: {
                    type: 'number',
                  },
                  pages: {
                    type: 'number',
                  },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/CityCustomer',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Invalid ID or paging parameterss format',
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
          description: 'City not found',
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
};

export { cityTags, cityPaths };
