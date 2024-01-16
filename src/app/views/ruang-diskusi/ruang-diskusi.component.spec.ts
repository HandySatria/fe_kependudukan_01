import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuangDiskusiComponent } from './ruang-diskusi.component';

describe('RuangDiskusiComponent', () => {
  let component: RuangDiskusiComponent;
  let fixture: ComponentFixture<RuangDiskusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuangDiskusiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuangDiskusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
