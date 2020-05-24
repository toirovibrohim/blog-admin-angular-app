import { PostService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule  } from '@ckeditor/ckeditor5-angular/ckeditor.module';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public editor: CKEditorModule;
  postDetails: FormGroup;
  newPost: any;
  constructor(private modalService: NgbModal, private categoryService: CategoryService,
    private userService: UserService, private postService: PostService) { }

  dashPosts;

  page = 1;
  pageSize = 5;
  postsList;
  categoriesList;
  usersList;
  show = false;

  async ngOnInit(): Promise<void> {
    this.postDetails = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      selectedCategory: new FormControl(),
      selectedUser: new FormControl(),
    });
    this.postDetails.valueChanges.subscribe(value => this.newPost = value);
    await this.getAllData();
    this.postsList = this.dashPosts.slice(0, this.pageSize);
    if (this.dashPosts.length > 5) {
      this.show = true;
    }
  }

  async getAllData() {
    this.dashPosts = await this.postService.getAllPosts();
    this.categoriesList = await this.categoryService.getAllCategories();
    this.usersList = await this.userService.getAllUsers();
  }

  onSavePost() {
    const newPost = {
      title: this.newPost.title,
      body: this.newPost.body,
      category_id: this.newPost.selectedCategory.id,
      created_by: this.newPost.selectedUser.id
    };
    this.postService.addPost(newPost)
      .then(data => {
        this.getAllData();
        this.close();
      });

  }

  onGetPage(value: number) {
    this.page = value;

    const start = (this.page - 1) * this.pageSize;
    this.postsList = this.dashPosts.slice(start, start + this.pageSize);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  close() {
    this.modalService.dismissAll();
  }
}
