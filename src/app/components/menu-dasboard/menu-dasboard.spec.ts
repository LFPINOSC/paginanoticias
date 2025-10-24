import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDasboard } from './menu-dasboard';

describe('MenuDasboard', () => {
  let component: MenuDasboard;
  let fixture: ComponentFixture<MenuDasboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDasboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDasboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
