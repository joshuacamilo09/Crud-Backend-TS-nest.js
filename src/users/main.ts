import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule); // app criado aqui

  const config = new DocumentBuilder()
    .setTitle('User API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
