import { TestBed } from '@angular/core/testing';

import { MovieShowInitializerService } from './movie-show-initializer.service';

describe('MovieShowInitializerService', () => {
  let service: MovieShowInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieShowInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
