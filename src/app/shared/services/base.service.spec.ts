import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

class TestModel {
  id!: number;
  name!: string;
}

class TestService extends BaseService<TestModel> {
  constructor(http: HttpClient) {
    super(http, 'test-endpoint');
  }
}

describe('BaseService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
