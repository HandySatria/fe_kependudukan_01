import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPengajarComponent } from './modal-pengajar.component';

describe('ModalPengajarComponent', () => {
  let component: ModalPengajarComponent;
  let fixture: ComponentFixture<ModalPengajarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPengajarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
