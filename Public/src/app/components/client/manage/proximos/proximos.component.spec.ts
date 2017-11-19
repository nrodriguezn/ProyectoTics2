import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosComponent } from './proximos.component';

describe('ProximosComponent', () => {
  let component: ProximosComponent;
  let fixture: ComponentFixture<ProximosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
