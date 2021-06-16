import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarativeDataAccessComponent } from './declarative-data-access.component';

describe('DeclarativeDataAccessComponent', () => {
  let component: DeclarativeDataAccessComponent;
  let fixture: ComponentFixture<DeclarativeDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarativeDataAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarativeDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
