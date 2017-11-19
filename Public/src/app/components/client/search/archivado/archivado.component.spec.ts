import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadoComponent } from './archivado.component';

describe('ArchivadoComponent', () => {
  let component: ArchivadoComponent;
  let fixture: ComponentFixture<ArchivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
