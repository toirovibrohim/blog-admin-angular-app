import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryService } from './services/categories.service';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { PostService } from './services/posts.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BoxCardComponent } from './box-card/box-card.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CategoriesComponent,
    UsersComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    BoxCardComponent,
    UserDetailsComponent,
    CategoryDetailsComponent,
    PostsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, CategoryService, PostService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
