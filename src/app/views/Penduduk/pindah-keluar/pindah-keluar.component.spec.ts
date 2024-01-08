import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindahKeluarComponent } from './pindah-keluar.component';

describe('PindahKeluarComponent', () => {
  let component: PindahKeluarComponent;
  let fixture: ComponentFixture<PindahKeluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PindahKeluarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindahKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
