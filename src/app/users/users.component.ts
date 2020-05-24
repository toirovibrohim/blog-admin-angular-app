import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;
  public usersResult;
  public showUsers = true;
  public notFound = false;
  public buttonDisabled = false;

  // Pagination
  firstPage = false;
  page = 1;
  pageSize = 5;
  usersList;
  show = false;

  searchValue;

  constructor(private userService: UserService,
              private router: Router ) { }


  async ngOnInit() {
    const value: any = await this.userService.getAllUsers();
    this.users = value;
    this.usersList = this.users.slice(0, this.pageSize);
    if (this.users.length > 5) {
      this.show = true;
    }
  }

  search() {
    const arr = this.users.filter((data) => {
      const name = data.name.toLowerCase();
      const email = data.email.toLowerCase();
      const value = this.searchValue.toLowerCase();
      if (name.includes(value) || email.includes(value)) {
        this.notFound = false;
        return true;
      } else {
        return false;
      }
    });
    if (!arr.length) {
      this.notFound = true;
    } else {
      this.usersResult = arr;
      this.usersList = this.usersResult.slice(0, this.pageSize);
      this.showUsers = false;
    }
  }

  onGetPage(value: number) {
    this.page = value;
    const start = (this.page - 1) * this.pageSize;
    if (this.showUsers) {
      this.usersList = this.users.slice(start, start + this.pageSize);
    } else {
      this.usersList = this.usersResult.slice(start, start + this.pageSize);
    }
  }

  onNavigate(id: number) {
    this.router.navigate(['users', id, 'details']);
  }
}

