import { TestBed } from '@angular/core/testing';

import { VendehumosService } from './vendehumos.service';

describe('VendehumosService', () => {
  let service: VendehumosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendehumosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
