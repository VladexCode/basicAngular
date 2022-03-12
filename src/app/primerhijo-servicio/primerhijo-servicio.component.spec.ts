import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerhijoServicioComponent } from './primerhijo-servicio.component';

describe('PrimerhijoServicioComponent', () => {
  let component: PrimerhijoServicioComponent;
  let fixture: ComponentFixture<PrimerhijoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerhijoServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerhijoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
