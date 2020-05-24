import { Router } from '@angular/router';
import { CategoryService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  searchValue;
  categoriesResult;
  notFound = false;
  showCategories = true;

  page = 1;
  pageSize = 5;
  categoriesList;
  show = false;


  constructor(private categoryService: CategoryService,
              private router: Router ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .then(data => {
        this.categories = data;
        this.categoriesList = this.categories.slice(0, this.pageSize);
        if (this.categories.length > 5) {
          this.show = true;
        }
      });
  }

  searchCategory() {
    const arr = this.categories.filter((data) => {
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
      this.categoriesResult = arr;
      this.categoriesList = this.categoriesResult.slice(0, this.pageSize);
      this.showCategories = false;
    }
  }

  getCategories() {
    this.categoryService.getAllCategories();
  }

  onGetPage(value: number) {
    this.page = value;
    if (this.showCategories) {
      const start = (this.page - 1) * this.pageSize;
      this.categoriesList = this.categories.slice(start, start + this.pageSize);
    }
  }

  onNavigate(id: number) {
    this.router.navigate(['/categories/' + id, 'details']);
  }

}
