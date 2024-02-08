import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesanComponent } from './pesan.component';

describe('PesanComponent', () => {
  let component: PesanComponent;
  let fixture: ComponentFixture<PesanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
