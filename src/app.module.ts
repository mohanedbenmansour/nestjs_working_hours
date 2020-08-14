import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
    PostModule,
    PostModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    ConfigModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
