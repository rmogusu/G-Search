import { Component, OnInit } from '@angular/core';
import {RepoModel} from '../repo-model';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.css']
})
export class UserRepoListComponent implements OnInit {
  myRepo: RepoModel[];


  constructor() { }

  ngOnInit() {
  }

}
