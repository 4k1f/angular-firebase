import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentyComponent } from './agenty.component';

describe('AgentyComponent', () => {
  let component: AgentyComponent;
  let fixture: ComponentFixture<AgentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
