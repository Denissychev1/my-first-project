import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimitationComponent } from './addimitation.component';

describe('AddimitationComponent', () => {
  let component: AddimitationComponent;
  let fixture: ComponentFixture<AddimitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
