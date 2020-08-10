import {
  Controller,
  Post,
  Req,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { PostService } from './post.service';

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
  async getAllPosts() {
    const products = await this.postService.getPosts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') postId: string) {
    return this.postService.getSinglePost(postId);
  }
  /*
  @Patch(':id')
  async updateProduct(
    @Param('id') postId: string,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    await this.postService.updatePost(postId, name, email);
    return null;
  }*/

  @Delete(':id')
  async removePost(@Param('id') postId: string) {
    await this.postService.deletePost(postId);
    return null;
  }
}
