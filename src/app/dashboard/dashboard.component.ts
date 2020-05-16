import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule  } from '@ckeditor/ckeditor5-angular/ckeditor.module';

interface IDashPost {
  number: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public editor: CKEditorModule;
  constructor(private modalService: NgbModal) { }

  dashPosts: IDashPost[] = [
    {
      number: "Post One",
      category: "Web Development",
      date: "November 10 2019",
    },
    {
      number: "Post Two",
      category: "Tech Gadgets",
      date: "November 10 2019",
    },
    {
      number: "Post Three",
      category: "Web Development",
      date: "November 13 2019",
    },
    {
      number: "Post Four",
      category: "Bussiness",
      date: "November 15 2019",
    },
    {
      number: "Post Five",
      category: "Web Development",
      date: "November 16 2019",
    },
    {
      number: "Post Six",
      category: "Heath & Wellness",
      date: "November 20 2019",
    },
  ];

  page = 1;
  pageSize = 5;
  postsList: IDashPost[];
  show = false;

  ngOnInit(): void {
    this.postsList = this.dashPosts.slice(0, this.pageSize);
    if (this.dashPosts.length > 5) {
      this.show = true;
    }
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
