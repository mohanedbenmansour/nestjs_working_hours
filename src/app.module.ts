import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
    PostModule,
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://mohaned:98898685968996@cluster0-hsoop.azure.mongodb.net/emaily?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    ),
    ConfigModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
