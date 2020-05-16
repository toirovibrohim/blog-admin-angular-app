import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {

  @Input() bgColor;
  @Input() headerName;
  @Input() postCount;
  @Input() link;
  @Input() icon;

  constructor() { }

  ngOnInit(): void {
  }

}
