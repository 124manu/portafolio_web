import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAcademiComponent } from './info-academi.component';

describe('InfoAcademiComponent', () => {
  let component: InfoAcademiComponent;
  let fixture: ComponentFixture<InfoAcademiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAcademiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAcademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
