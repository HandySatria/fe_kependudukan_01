import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPesertaDidikComponent } from './modal-peserta-didik.component';

describe('ModalPesertaDidikComponent', () => {
  let component: ModalPesertaDidikComponent;
  let fixture: ComponentFixture<ModalPesertaDidikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPesertaDidikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPesertaDidikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
