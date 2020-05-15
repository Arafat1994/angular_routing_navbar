import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCopponentComponent } from './navbar-copponent.component';

describe('NavbarCopponentComponent', () => {
  let component: NavbarCopponentComponent;
  let fixture: ComponentFixture<NavbarCopponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCopponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCopponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
