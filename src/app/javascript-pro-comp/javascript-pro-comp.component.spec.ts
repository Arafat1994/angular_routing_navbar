import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptProCompComponent } from './javascript-pro-comp.component';

describe('JavascriptProCompComponent', () => {
  let component: JavascriptProCompComponent;
  let fixture: ComponentFixture<JavascriptProCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptProCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptProCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
