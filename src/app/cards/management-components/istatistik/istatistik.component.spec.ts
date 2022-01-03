import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstatistikComponent } from './istatistik.component';

describe('IstatistikComponent', () => {
  let component: IstatistikComponent;
  let fixture: ComponentFixture<IstatistikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstatistikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstatistikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
