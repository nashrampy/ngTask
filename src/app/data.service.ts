import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(res => res), catchError(err => Observable.throw(err)));
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId).pipe(map(res => res), catchError(err => Observable.throw(err)));
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res => res), catchError(err => Observable.throw(err)));
  }
  
  addPosts(data:any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data).pipe(map(res=>res),catchError(err=>Observable.throw(err)));
  
  }
}
