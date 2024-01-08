import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindahMasukComponent } from './pindah-masuk.component';

describe('PindahMasukComponent', () => {
  let component: PindahMasukComponent;
  let fixture: ComponentFixture<PindahMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PindahMasukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindahMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
