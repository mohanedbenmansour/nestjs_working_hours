import {
  Controller,
  Post,
  Req,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async addPost(@Req() req) {
    console.log(req);
    const generatedId = await this.postService.insertPost(req.body);
    return { id: generatedId };
  }

  @Get()
  //@UseGuards(AuthGuard())
  async getAllPosts() {
    const products = await this.postService.getPosts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') postId: string) {
    return this.postService.getSinglePost(postId);
  }
  @Get('test')
  @UseGuards(AuthGuard())
  testAuthRoute() {
    return {
      message: 'You did it!',
    };
  }

  @Delete(':id')
  async removePost(@Param('id') postId: string) {
    await this.postService.deletePost(postId);
    return null;
  }
}
