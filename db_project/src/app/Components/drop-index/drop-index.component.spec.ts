import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropIndexComponent } from './drop-index.component';

describe('DropIndexComponent', () => {
  let component: DropIndexComponent;
  let fixture: ComponentFixture<DropIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
