import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from './post.model';
import { PostService } from '../post/post.service';
import { PostController } from './post.controller';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: postSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
