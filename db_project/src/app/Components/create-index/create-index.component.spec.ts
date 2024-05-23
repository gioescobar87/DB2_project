import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndexComponent } from './create-index.component';

describe('CreateIndexComponent', () => {
  let component: CreateIndexComponent;
  let fixture: ComponentFixture<CreateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
