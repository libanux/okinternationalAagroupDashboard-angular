import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborMainComponent } from './labor-main.component';

describe('LaborMainComponent', () => {
  let component: LaborMainComponent;
  let fixture: ComponentFixture<LaborMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaborMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
