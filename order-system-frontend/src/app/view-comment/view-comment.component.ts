import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../classes/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  commentList: Comment[];

  constructor(private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.getCommentList();
  }

  getCommentList(){
      this.commentService.getCommentList().subscribe(data => {
        this.commentList = data;
      },error => console.log(error));
  }

  viewCommentDetail(id:number){
    this.router.navigate(['view-comment-detail',id]);
  }
}
