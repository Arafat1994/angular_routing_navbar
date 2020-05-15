import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactProCompComponent } from './react-pro-comp.component';

describe('ReactProCompComponent', () => {
  let component: ReactProCompComponent;
  let fixture: ComponentFixture<ReactProCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactProCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactProCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
