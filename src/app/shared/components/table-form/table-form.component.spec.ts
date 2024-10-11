import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormComponent } from './table-form.component';

describe('TableFormComponent', () => {
  let component: TableFormComponent;
  let fixture: ComponentFixture<TableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
