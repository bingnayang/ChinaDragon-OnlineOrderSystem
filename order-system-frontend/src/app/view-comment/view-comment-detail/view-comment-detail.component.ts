import { Component, OnInit } from '@angular/core';
import { Comment } from '../../classes/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-comment-detail',
  templateUrl: './view-comment-detail.component.html',
  styleUrls: ['./view-comment-detail.component.css']
})
export class ViewCommentDetailComponent implements OnInit {
  id: number;
  commentDetail: Comment = new Comment();

  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.commentService.getCommentDetail(this.id).subscribe(data => {
      this.commentDetail = data;
      console.log(data);
    },error => console.log(error))
  }

}
