import { Component, OnInit,Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  searchTerm: string;
  @Output() searchEmitter = new EventEmitter<any>();

  constructor() { }

emitUser() {
  this.searchEmitter.emit(this.searchTerm);
  this.searchTerm= new SearchTerm ('');
  }
  ngOnInit() {
  }

}
