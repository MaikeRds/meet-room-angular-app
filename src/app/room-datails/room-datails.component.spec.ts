import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDatailsComponent } from './room-datails.component';

describe('RoomDatailsComponent', () => {
  let component: RoomDatailsComponent;
  let fixture: ComponentFixture<RoomDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
