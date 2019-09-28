import { Component, OnInit } from '@angular/core';
import {RepoModel} from '../repo-model';
import {RepoServiceService} from '../repo-service.service';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.css']
})
export class UserRepoListComponent implements OnInit {
  myRepo: RepoModel[];


  constructor(public reposerv: RepoServiceService) { }

  ngOnInit() {
  }

}
