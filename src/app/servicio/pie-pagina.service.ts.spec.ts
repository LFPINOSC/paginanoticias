import { TestBed } from '@angular/core/testing';

import { PiePaginaServiceTs } from './pie-pagina.service.ts';

describe('PiePaginaServiceTs', () => {
  let service: PiePaginaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiePaginaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
