import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendudukDetailComponent } from './penduduk-detail.component';

describe('PendudukDetailComponent', () => {
  let component: PendudukDetailComponent;
  let fixture: ComponentFixture<PendudukDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendudukDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendudukDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
