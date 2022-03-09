import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPaginationComponent } from './preview-pagination.component';

describe('PreviewPaginationComponent', () => {
  let component: PreviewPaginationComponent;
  let fixture: ComponentFixture<PreviewPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewPaginationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
