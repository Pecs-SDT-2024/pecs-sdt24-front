import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideComponent } from './side.component';

// Material Styles
import {MatIconModule} from '@angular/material/icon';

describe('SideSectionComponent', () => {
  let component: SideComponent;
  let fixture: ComponentFixture<SideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
