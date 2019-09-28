import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';
import {UserRepoListComponent} from './user-repo-list/user-repo-list.component';
// import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
{path: 'user-list', component: UserDataComponent},
{path: 'repo-list', component: UserRepoListComponent},
{path: '', redirectTo: '/user-list', pathMatch: 'full'},
// {path: '**', component : NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
