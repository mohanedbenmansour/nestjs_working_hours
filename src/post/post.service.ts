import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post } from './post.model';
@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async insertPost(working_days: []) {
    const newPost = new this.postModel({
      working_days: working_days,
    });
    const result = await newPost.save();
    return result.id as string;
  }

  async getPosts() {
    const posts = await this.postModel.find().exec();
    return posts.map(post => ({
      id: post.id,
      working_hours: post.working_days,
    }));
  }

  async getSinglePost(postId: string) {
    const post = await this.findPost(postId);
    return {
      id: post.id,
      working_hours: post.working_days,
    };
  }

  /*async updatePost(postId: string, name: string, email: string) {
    const updatedPost = await this.findPost(postId);
    if (id) {
      updatedPost.id = name;
    }
    if (email) {
      updatedPost.email = email;
    }

    updatedPost.save();
  }*/

  async deletePost(prodId: string) {
    const result = await this.postModel.deleteOne({ _id: prodId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find post.');
    }
  }

  private async findPost(id: string): Promise<Post> {
    let post;
    try {
      post = await this.postModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find post.');
    }
    if (!post) {
      throw new NotFoundException('Could not find post.');
    }
    return post;
  }
}
