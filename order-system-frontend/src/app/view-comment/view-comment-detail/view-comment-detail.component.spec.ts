import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommentDetailComponent } from './view-comment-detail.component';

describe('ViewCommentDetailComponent', () => {
  let component: ViewCommentDetailComponent;
  let fixture: ComponentFixture<ViewCommentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
