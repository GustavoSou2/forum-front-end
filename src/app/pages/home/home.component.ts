import { Component, OnInit } from '@angular/core';
import {PostService} from "../../http/modules/post/service/post.service";
import PostModel from "../../http/modules/post/types/model/post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.listPosts()
  }

  listPosts() {
    this.postService.list()
      .subscribe(post => this.posts = post)
  }
}
