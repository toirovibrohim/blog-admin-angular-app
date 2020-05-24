import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  id;
  category;
  categoryDetails: FormGroup;
  editedCategory;
  deleted = false;
  saved = false;
  users;
  selected;


  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private userService: UserService ) { }

  ngOnInit(): void {
    this.categoryDetails = new FormGroup({
      category: new FormControl(),
      selected: new FormControl()
    });
    this.categoryDetails.valueChanges.subscribe(value => this.editedCategory = value);
    this.id = this.route.snapshot.params.id;
    this.getAllData();
  }

  getAllData() {
    Promise.all([
      this.getCategory(),
      this.getUsers(),
    ]).then((dataArr) => {
      this.category = dataArr[0];
      this.users = dataArr[1];
      return;
    }).then(() => {
      if (!this.category) {
        this.deleted = true;
        return;
      }
      this.categoryDetails.setValue({
        category: this.category.title,
        selected: this.users.find((user) => user.id === this.category.created_by),
      });
    });
  }


  getCategory() {
    return this.categoryService.getCategory(this.id);
  }

  getUsers() {
    return this.userService.getAllUsers();
  }

  onSaveCategory() {
    const editedCategory = {
      title: this.editedCategory.category,
      created_by: this.editedCategory.selected.id
    };
    this.categoryService.saveCategory(this.id, editedCategory)
      .then(data => {
        this.saved = true;
        setTimeout(() => this.saved = false, 5000);
        this.getAllData();
      });

  }

  onDeleteCategory() {
    this.categoryService.deleteCategory(this.id);
    this.deleted = true;
  }

  onClickClose() {
    this.saved = false;
  }
}
