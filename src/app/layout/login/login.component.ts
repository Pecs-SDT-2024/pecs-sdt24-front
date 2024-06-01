import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// Material Styles
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>
    ) {}

    email = new FormControl('', [Validators.required, Validators.email]);
    hide1= true;

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    login(): void {
        console.log("Logging in...")
        this.dialogRef.close();
    }
}
