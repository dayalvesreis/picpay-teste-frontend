import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private userListUrl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  geUserList() {
    return this.http.get<User[]>(this.userListUrl);
  }
}
