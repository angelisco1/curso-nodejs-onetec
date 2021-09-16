import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVendehumosComponent } from './lista-vendehumos.component';

describe('ListaVendehumosComponent', () => {
  let component: ListaVendehumosComponent;
  let fixture: ComponentFixture<ListaVendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVendehumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
