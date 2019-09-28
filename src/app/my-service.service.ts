import { Injectable } from '@angular/core';
import {GitUser} from './git-user';
 
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];


  constructor() { }
}
