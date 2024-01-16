import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoinPelanggaranComponent } from './poin-pelanggaran.component';

describe('PoinPelanggaranComponent', () => {
  let component: PoinPelanggaranComponent;
  let fixture: ComponentFixture<PoinPelanggaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoinPelanggaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoinPelanggaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
