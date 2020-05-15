import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule  } from '@ckeditor/ckeditor5-angular/ckeditor.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public editor: CKEditorModule
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  close(){
    this.modalService.dismissAll();
  }
}
