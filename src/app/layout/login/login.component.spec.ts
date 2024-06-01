import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Styles
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
describe('LoginModalComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ MatDialogModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
