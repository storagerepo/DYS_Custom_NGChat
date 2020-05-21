import { TestBed } from '@angular/core/testing';

import { NgChatLibService } from './ng-chat-lib.service';

describe('NgChatLibService', () => {
  let service: NgChatLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgChatLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
