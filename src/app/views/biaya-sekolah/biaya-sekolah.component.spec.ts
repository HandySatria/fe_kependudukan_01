import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiayaSekolahComponent } from './biaya-sekolah.component';

describe('BiayaSekolahComponent', () => {
  let component: BiayaSekolahComponent;
  let fixture: ComponentFixture<BiayaSekolahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiayaSekolahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiayaSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
