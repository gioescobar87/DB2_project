import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterTableComponent } from './alter-table.component';

describe('AlterTableComponent', () => {
  let component: AlterTableComponent;
  let fixture: ComponentFixture<AlterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
