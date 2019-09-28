import { Injectable } from '@angular/core';
import {GitUser} from './git-user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = "?access_token=e8d69983bba3ae132ca4cf6f36bba724aefac099";


  constructor(private http: HttpClient) { }
  
  searchMyUser(searchTerm: string) {

    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repositories: string;
      name:string;
      bio:string;
      location:string;
      company:string;

    }
    return new Promise((resolve, reject) => {
      this.user = [];

      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
}
}
