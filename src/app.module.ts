import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostModule,
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://mohaned:98898685968996@cluster0-hsoop.azure.mongodb.net/emaily?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
