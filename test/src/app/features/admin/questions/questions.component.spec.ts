import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImitationeditComponent } from './questions.component';

describe('ImitationeditComponent', () => {
  let component: ImitationeditComponent;
  let fixture: ComponentFixture<ImitationeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImitationeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImitationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
