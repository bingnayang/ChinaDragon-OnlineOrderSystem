import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../classes/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL = "http://localhost:8080/api/comments";

  constructor(private httpClient: HttpClient) { }

  getCommentList():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseURL}`);
  }
}
