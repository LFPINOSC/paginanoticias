import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEmprese } from './from-emprese';

describe('FromEmprese', () => {
  let component: FromEmprese;
  let fixture: ComponentFixture<FromEmprese>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromEmprese]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEmprese);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
