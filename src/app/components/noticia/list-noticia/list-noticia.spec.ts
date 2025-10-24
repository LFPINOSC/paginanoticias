import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoticia } from './list-noticia';

describe('ListNoticia', () => {
  let component: ListNoticia;
  let fixture: ComponentFixture<ListNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
