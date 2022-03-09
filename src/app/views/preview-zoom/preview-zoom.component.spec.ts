import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewZoomComponent } from './preview-zoom.component';

describe('PreviewZoomComponent', () => {
  let component: PreviewZoomComponent;
  let fixture: ComponentFixture<PreviewZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewZoomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
