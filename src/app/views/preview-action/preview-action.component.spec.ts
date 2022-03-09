import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewActionComponent } from './preview-action.component';

describe('PreviewActionComponent', () => {
  let component: PreviewActionComponent;
  let fixture: ComponentFixture<PreviewActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewActionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
