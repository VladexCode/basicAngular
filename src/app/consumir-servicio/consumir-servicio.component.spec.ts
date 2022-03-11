import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirServicioComponent } from './consumir-servicio.component';

describe('ConsumirServicioComponent', () => {
  let component: ConsumirServicioComponent;
  let fixture: ComponentFixture<ConsumirServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumirServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumirServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
