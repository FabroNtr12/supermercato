import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardManagerPage } from './dashboard-manager.page';

describe('DashboardManagerPage', () => {
  let component: DashboardManagerPage;
  let fixture: ComponentFixture<DashboardManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
