import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillafuncionComponent } from './plantillafuncion.component';

describe('PlantillafuncionComponent', () => {
  let component: PlantillafuncionComponent;
  let fixture: ComponentFixture<PlantillafuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
