import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConInscComponent } from './con-insc.component';

describe('ConInscComponent', () => {
  let component: ConInscComponent;
  let fixture: ComponentFixture<ConInscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConInscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
