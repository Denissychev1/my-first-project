import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImitationsComponent } from './imitations.component';

describe('ImitationsComponent', () => {
  let component: ImitationsComponent;
  let fixture: ComponentFixture<ImitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
