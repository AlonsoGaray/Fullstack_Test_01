import swaggerJsdoc from 'swagger-jsdoc'
import { SwaggerDefinition } from 'swagger-jsdoc'

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Project Management API',
    version: '1.0.0',
    description: 'REST API for collaborative project management platform',
    contact: {
      name: 'API Support',
    },
  },
  servers: [
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://api.yourapp.com'
          : `http://localhost:${process.env.PORT || 3000}`,
      description:
        process.env.NODE_ENV === 'production'
          ? 'Production server'
          : 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
}

const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
}

export const swaggerSpec = swaggerJsdoc(options)
