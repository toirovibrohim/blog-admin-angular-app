import { Component, OnInit } from '@angular/core';

interface ICategory {
  number: string;
  date: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    {
      number: "Post One",
      date: "November 10 2019",
    },
    {
      number: "Post Two",
      date: "November 14 2019",
    },
    {
      number: "Post Three",
      date: "November 18 2019"
    },
    {
      number: "Post Four",
      date: "November 19 2019",
    },
    {
      number: "Post Five",
      date: "November 22 2019",
    },
    {
      number: "Post Six",
      date: "November 30 2019",
    },
    {
      number: "Post Seven",
      date: "November 31 2019",
    },
    {
      number: "Post Eight",
      date: "December 5 2019"
    },
    {
      number: "Post Nine",
      date: "December 19 2019",
    },
    {
      number: "Post Ten",
      date: "December 22 2019",
    },
    {
      number: "Post Eleven",
      date: "January 9 2020",
    },
    {
      number: "Post Twelve",
      date: "January 14 2020",
    },
    {
      number: "Post Thirteen",
      date: "January 16 2020"
    },
    {
      number: "Post Fourteen",
      date: "January 15 2020",
    },
    {
      number: "Post Fifteen",
      date: "January 26 2020",
    },
  ];

  page = 1;
  pageSize = 5;
  categoriesList: ICategory[];
  show = false;

  constructor() { }

  ngOnInit(): void {
    this.categoriesList = this.categories.slice(0, this.pageSize);
    if (this.categories.length > 5) {
      this.show = true;
    }
  }

  onGetPage(value: number) {
    this.page = value;

    const start = (this.page - 1) * this.pageSize;
    this.categoriesList = this.categories.slice(start, start + this.pageSize);
  }



}
