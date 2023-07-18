import { TestBed } from '@angular/core/testing';

import { WeatherDashService } from './weatherDash.service';

describe('WeatherDashService', () => {
  let service: WeatherDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
