import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureSwagger = (app: INestApplication) =>{
  let swaggerConfig = new DocumentBuilder()
    .setTitle('UzChess')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()

  let docs = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/docs', app, docs, {
    swaggerOptions: {persistAuthorization: true}
  })
}