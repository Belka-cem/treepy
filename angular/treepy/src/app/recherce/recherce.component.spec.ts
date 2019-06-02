import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherceComponent } from './recherce.component';

describe('RecherceComponent', () => {
  let component: RecherceComponent;
  let fixture: ComponentFixture<RecherceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
