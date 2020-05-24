import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id;
  user;
  userDetails: FormGroup;
  editedUser;
  saved = false;
  deleted = false;

  constructor(private route: ActivatedRoute,
              private userService: UserService ) { }

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      bio: new FormControl()
    });
    this.userDetails.valueChanges.subscribe((value) => this.editedUser = value);
    this.id = this.route.snapshot.params.id;
    this.getUser();
}

  getUser() {
    this.userService.getUser(this.id)
      .then(data => {
        this.user = data;
        if (!this.user) {
          this.deleted = true;
          return;
        }
        this.userDetails.setValue({
          name: this.user.name,
          email: this.user.email,
          bio: this.user.bio
        });
        return data;
      });
  }


  onSaveUser() {
    this.userService.saveUser(this.id, this.editedUser)
      .then((data) => {
        this.saved = true;
        setTimeout(() => this.saved = false, 5000);
        this.getUser();
      });
  }

  onClickClose() {
    this.saved = false;
  }

  onDeleteUser() {
    this.userService.deleteUser(this.id);
    this.deleted = true;
  }
}
