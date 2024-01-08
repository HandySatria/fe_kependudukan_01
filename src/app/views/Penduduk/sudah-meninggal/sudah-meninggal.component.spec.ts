import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudahMeninggalComponent } from './sudah-meninggal.component';

describe('SudahMeninggalComponent', () => {
  let component: SudahMeninggalComponent;
  let fixture: ComponentFixture<SudahMeninggalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudahMeninggalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudahMeninggalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
