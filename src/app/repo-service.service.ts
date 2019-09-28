import { Injectable } from '@angular/core';
import {RepoModel} from './repo-model';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  myRepo: RepoModel[]=[];

  constructor() { }
}
