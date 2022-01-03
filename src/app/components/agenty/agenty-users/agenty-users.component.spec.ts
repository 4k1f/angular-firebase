import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentyUsersComponent } from './agenty-users.component';

describe('AgentyUsersComponent', () => {
  let component: AgentyUsersComponent;
  let fixture: ComponentFixture<AgentyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentyUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
