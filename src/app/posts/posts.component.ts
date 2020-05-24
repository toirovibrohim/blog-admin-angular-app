import { PostService } from './../services/posts.service';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { CategoryService } from '../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  searchValue;
  postsResult;
  notFound = false;
  showPosts = true;

  page = 1;
  pageSize = 5;
  postsList;
  show = false;

  constructor(private categoryService: CategoryService,
    private postService: PostService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postService.getAllPosts()
    .then(data => {
      console.log(data);
      this.posts = data;
      this.postsList = this.posts.slice(0, this.pageSize);
      if (this.posts.length > 5) {
        this.show = true;
      }
    });
  }

  searchPosts() {
    const arr = this.posts.filter((data) => {
      const name = data.title.toLowerCase();
      const value = this.searchValue.toLowerCase();
      if (name.includes(value)) {
        this.notFound = false;
        return true;
      } else {
        return false;
      }
    });
    if (!arr.length) {
      this.notFound = true;
    } else {
      this.postsResult = arr;
      this.postsList = this.postsResult.slice(0, this.pageSize);
      this.showPosts = false;
    }
  }

  getCategories() {
    this.categoryService.getAllCategories();
  }

  onGetPage(value: number) {
    this.page = value;
    if (this.showPosts) {
      const start = (this.page - 1) * this.pageSize;
      this.postsList = this.posts.slice(start, start + this.pageSize);
    }
  }

  onNavigate(id: number) {
    this.router.navigate(['/posts/' + id, 'details']);
  }
}
