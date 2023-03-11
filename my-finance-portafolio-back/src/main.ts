import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Stocks')
    .setDescription('Stocks API for FinanceApp')
    .setVersion('1.0.0')
    .addTag('stocks')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-stocks', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showrequestduration: true,
    },
  });

  const configService = app.get(ConfigService);
  const portApp = configService.get('PORT');
  await app.listen(parseInt(portApp));
}
bootstrap();

/*async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: ['error', 'warn'],
      cors: true,
    },
  );

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.setGlobalPrefix('api');
  await app.listen(3000, '0.0.0.0');
}
bootstrap();*/
