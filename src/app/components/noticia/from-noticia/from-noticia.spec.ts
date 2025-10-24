import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNoticia } from './from-noticia';

describe('FromNoticia', () => {
  let component: FromNoticia;
  let fixture: ComponentFixture<FromNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
