import { Component, OnInit } from '@angular/core';

interface IUser {
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: IUser[] = [
    {
      name: 'Tom Abraham',
      email: 'tomabraham@email.com'
    },
    {
      name: 'John Andy',
      email: 'jandy@email.com',
    }
  ];
  
  
  constructor() { }



  ngOnInit(): void {
  }

}
