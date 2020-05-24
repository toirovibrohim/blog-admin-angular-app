import { PostService } from './../../services/posts.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  id;
  post;
  postDetails: FormGroup;
  editedPost;
  deleted = false;
  saved = false;
  users;
  selected;
  categories;


  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private userService: UserService,
              private postService: PostService ) { }

  ngOnInit(): void {
    this.postDetails = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      selectedCategory: new FormControl(),
      selectedUser: new FormControl(),
    });
    this.postDetails.valueChanges.subscribe(value => this.editedPost = value);
    this.id = this.route.snapshot.params.id;
    this.getAllData();
  }

  getAllData() {
    Promise.all([
      this.getCategory(),
      this.getUsers(),
      this.getPost()
    ]).then((dataArr) => {
      console.log(dataArr);
      this.categories = dataArr[0];
      this.users = dataArr[1];
      this.post = dataArr[2];
      return;
    }).then(() => {
      if (!this.post) {
        this.deleted = true;
        return;
      }
      const setObj = {
        title: this.post.title,
        body: this.post.body,
        selectedCategory: this.categories.find((category) => category.id === this.post.category_id) || { title: 'deleted category'},
        selectedUser: this.users.find((user) => user.id === this.post.created_by),
      }
      console.log(setObj);
      this.postDetails.setValue(setObj);
    });
  }


  getCategory() {
    return this.categoryService.getAllCategories();
  }

  getUsers() {
    return this.userService.getAllUsers();
  }

  getPost() {
    return this.postService.getPost(this.id)
  }

  onSave() {
    const editedPost = {
      title: this.editedPost.title,
      body: this.editedPost.body,
      category_id: this.editedPost.selectedCategory.id,
      created_by: this.editedPost.selectedUser.id
    };
    this.postService.savePost(this.id, editedPost)
      .then(data => {
        this.saved = true;
        setTimeout(() => this.saved = false, 5000);
        this.getAllData();
      });

  }

  onDelete() {
    this.postService.deletePost(this.id);
    this.deleted = true;
  }

  onClickClose() {
    this.saved = false;
  }

}
