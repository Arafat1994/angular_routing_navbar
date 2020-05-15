import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProCompComponent } from './angular-pro-comp.component';

describe('AngularProCompComponent', () => {
  let component: AngularProCompComponent;
  let fixture: ComponentFixture<AngularProCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
