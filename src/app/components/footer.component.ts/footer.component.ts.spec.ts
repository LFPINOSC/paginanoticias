import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentTs } from './footer.component.ts';

describe('FooterComponentTs', () => {
  let component: FooterComponentTs;
  let fixture: ComponentFixture<FooterComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponentTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponentTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
