import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelahiranAsliComponent } from './kelahiran-asli.component';

describe('KelahiranAsliComponent', () => {
  let component: KelahiranAsliComponent;
  let fixture: ComponentFixture<KelahiranAsliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelahiranAsliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelahiranAsliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
