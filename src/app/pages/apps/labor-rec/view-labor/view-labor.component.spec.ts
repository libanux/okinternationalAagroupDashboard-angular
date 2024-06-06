import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLaborComponent } from './view-labor.component';

describe('ViewLaborComponent', () => {
  let component: ViewLaborComponent;
  let fixture: ComponentFixture<ViewLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLaborComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
