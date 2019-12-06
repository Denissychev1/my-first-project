import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswereditComponent } from './answeredit.component';

describe('AnswereditComponent', () => {
  let component: AnswereditComponent;
  let fixture: ComponentFixture<AnswereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
