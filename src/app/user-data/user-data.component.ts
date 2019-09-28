import { Component, OnInit } from '@angular/core';
import {GitUser} from '../git-user';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
   user: GitUser[];


  constructor() { }

  ngOnInit() {
  }

}
