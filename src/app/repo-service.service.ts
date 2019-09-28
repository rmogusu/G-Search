import { Injectable } from '@angular/core';
import {RepoModel} from './repo-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  myRepo: RepoModel[]=[];

  constructor(public  http: HttpClient) { }
}
