import { Component, OnInit } from '@angular/core';

interface IPost {
  number: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: IPost[] = [
    {
      number: "Post One",
      category: "Web Development",
      date: "November 10 2019"
    },
    {
      number: "Post Two",
      category: "Tech Gadgets",
      date: "November 10 2019"
    },
    {
      number: "Post Three",
      category: "Web Development",
      date: "November 13 2019"
    },
    {
      number: "Post Four",
      category: "Bussiness",
      date: "November 15 2019"
    },
    {
      number: "Post Five",
      category: "Web Development",
      date: "November 16 2019"
    },
    {
      number: "Post Six",
      category: "Health & Wellness",
      date: "November 20 2019"
    },
  ];

  page = 1;
  pageSize = 5;
  postsList: IPost[];
  show = false;

  constructor() { }

  ngOnInit(): void {
    this.postsList = this.posts.slice(0, this.pageSize);
    if (this.posts.length > 5) {
      this.show = true;
    }
  }

  onGetPage(value: number) {
    this.page = value;

    const start = (this.page - 1) * this.pageSize;
    this.postsList = this.posts.slice(start, start + this.pageSize);
  }

}
