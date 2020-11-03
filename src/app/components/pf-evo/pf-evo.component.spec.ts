import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfEvoComponent } from './pf-evo.component';

describe('PfEvoComponent', () => {
  let component: PfEvoComponent;
  let fixture: ComponentFixture<PfEvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfEvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfEvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
