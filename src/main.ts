import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder ,SwaggerModule} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
