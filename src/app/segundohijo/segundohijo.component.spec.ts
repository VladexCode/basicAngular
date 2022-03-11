import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundohijoComponent } from './segundohijo.component';

describe('SegundohijoComponent', () => {
  let component: SegundohijoComponent;
  let fixture: ComponentFixture<SegundohijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundohijoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundohijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
