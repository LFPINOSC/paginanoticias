import { TestBed } from '@angular/core/testing';

import { MenuServicio } from './menu-servicio';

describe('MenuServicio', () => {
  let service: MenuServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
