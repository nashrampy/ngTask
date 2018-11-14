import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts$: Object;

  constructor(private data: DataService,private router:Router) {}
  ngOnInit() {
    this.data.getPosts().subscribe(data => (this.posts$ = data));
  }
  initForm(){
    this.router.navigate(['/post-form']);
  }
}
