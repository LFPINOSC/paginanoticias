import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasboardComponent } from './dasboard';



describe('Dasboard', () => {
  let component: DasboardComponent;
  let fixture: ComponentFixture<DasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
