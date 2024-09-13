import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsCustomLibraryComponent } from './ps-custom-library.component';

describe('PsCustomLibraryComponent', () => {
  let component: PsCustomLibraryComponent;
  let fixture: ComponentFixture<PsCustomLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsCustomLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsCustomLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
