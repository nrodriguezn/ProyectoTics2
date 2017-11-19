import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPrecioComponent } from './por-precio.component';

describe('PorPrecioComponent', () => {
  let component: PorPrecioComponent;
  let fixture: ComponentFixture<PorPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
