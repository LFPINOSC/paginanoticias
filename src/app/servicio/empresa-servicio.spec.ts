import { TestBed } from '@angular/core/testing';
import { EmpresaService } from './empresa-servicio';


describe('EmpresaServicio', () => {
  let service: EmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
