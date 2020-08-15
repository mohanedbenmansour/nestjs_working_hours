import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('TESTTEST' + process.env.MONGO_URI);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
