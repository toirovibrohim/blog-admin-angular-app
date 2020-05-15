import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "dashboard", component: DashboardComponent},
    { path: "posts", component: PostsComponent },
    { path: "categories", component: CategoriesComponent },
    { path: "users", component: UsersComponent },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent },
    { path: "settings", component: SettingsComponent },
    { path: "details", component: DetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}