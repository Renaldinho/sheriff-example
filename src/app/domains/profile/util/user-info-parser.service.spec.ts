import { TestBed } from '@angular/core/testing';

import { UserInfoParserService } from './user-info-parser.service';

describe('UserInfoParserService', () => {
  let service: UserInfoParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
