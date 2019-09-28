import { Component, OnInit } from '@angular/core';
import {GitUser} from '../git-user';
import {MyServiceService} from '../my-service.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
   user: GitUser[];

  //  addNewSearchTerm(quote){
  //   let quoteLength = this.u.length
  //   u.created_at = new Date(u.created_at)
  //   this.u.push(searchTerm)
  // }
  constructor(private service: MyServiceService) { }

  ngOnInit() {
  }

}
