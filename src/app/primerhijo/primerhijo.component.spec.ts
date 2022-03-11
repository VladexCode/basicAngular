import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerhijoComponent } from './primerhijo.component';

describe('PrimerhijoComponent', () => {
  let component: PrimerhijoComponent;
  let fixture: ComponentFixture<PrimerhijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerhijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
