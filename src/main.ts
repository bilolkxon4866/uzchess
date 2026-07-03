import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder ,SwaggerModule} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads' });

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Uzchess APIs")
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()

  const swaggerDoc = SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup('/docs',app,swaggerDoc)
  await app.listen(process.env.PORT ?? 8888);
}
bootstrap();