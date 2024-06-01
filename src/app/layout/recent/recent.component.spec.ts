import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentComponent } from './recent.component';

describe('RecentSectionComponent', () => {
  let component: RecentComponent;
  let fixture: ComponentFixture<RecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
