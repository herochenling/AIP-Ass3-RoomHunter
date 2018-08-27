import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';

describe('CreatePostComponent', () => {
  let component: CreatePostCompoent;
  let fixture: ComponentFixture<CreatePostCompoent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostCompoent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
