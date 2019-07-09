import { TestBed, inject } from '@angular/core/testing';

import { MongodbExpressService } from './mongodb-express.service';

describe('MongodbExpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongodbExpressService]
    });
  });

  it('should be created', inject([MongodbExpressService], (service: MongodbExpressService) => {
    expect(service).toBeTruthy();
  }));
});
