import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConConComponent } from './con-con.component';

describe('ConConComponent', () => {
  let component: ConConComponent;
  let fixture: ComponentFixture<ConConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
