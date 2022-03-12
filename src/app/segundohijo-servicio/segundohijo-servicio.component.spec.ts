import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundohijoServicioComponent } from './segundohijo-servicio.component';

describe('SegundohijoServicioComponent', () => {
  let component: SegundohijoServicioComponent;
  let fixture: ComponentFixture<SegundohijoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundohijoServicioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundohijoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
