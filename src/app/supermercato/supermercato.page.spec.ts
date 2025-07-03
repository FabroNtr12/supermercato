import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupermercatoPage } from './supermercato.page';

describe('SupermercatoPage', () => {
  let component: SupermercatoPage;
  let fixture: ComponentFixture<SupermercatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermercatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
