import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateTableComponent } from './truncate-table.component';

describe('TruncateTableComponent', () => {
  let component: TruncateTableComponent;
  let fixture: ComponentFixture<TruncateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruncateTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruncateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
