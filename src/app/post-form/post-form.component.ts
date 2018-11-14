import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from "../data.service";
import { Router } from '@angular/router';


@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  statusMsg = "";
  constructor(
    private formBuilder: FormBuilder,
    private dataSrv: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: [
        ,
        [
          Validators.required,
          Validators.maxLength(25),
          Validators.pattern("^[a-z A-Z0-9_-]+$")
        ]
      ],
      body: [, [Validators.maxLength(51), Validators.required]]
    });
  }

  onPost() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      this.dataSrv.addPosts(this.postForm.value).subscribe(
        res => {
          this.statusMsg = "Posted Successfully";
        },
        err => {
          this.statusMsg = "Failed, Unable to submit your post";
        }
      );
    }
  }
  returnToPosts() {
    this.router.navigate(["/posts"]);
  }
  reset(){
    this.postForm.reset();
    this.statusMsg =" ";
  }
}
