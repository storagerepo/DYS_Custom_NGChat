import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChatLibComponent } from './ng-chat-lib.component';

describe('NgChatLibComponent', () => {
  let component: NgChatLibComponent;
  let fixture: ComponentFixture<NgChatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
