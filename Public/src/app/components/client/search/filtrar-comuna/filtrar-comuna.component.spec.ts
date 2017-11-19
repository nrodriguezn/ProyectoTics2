import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarComunaComponent } from './filtrar-comuna.component';

describe('FiltrarComunaComponent', () => {
  let component: FiltrarComunaComponent;
  let fixture: ComponentFixture<FiltrarComunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarComunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarComunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
