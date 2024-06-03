import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  public username$: string;
  public email$: string;

  constructor (private authService : AuthService) {
    this.username$ = ""
    this.email$ = ""
  }

  ngOnInit(): void {
    this.authService.getUserData().subscribe({
      next: data => {
        const d = data.data?.name
        if (d != undefined) {
          this.username$ = d
        }

        const e = data.data?.email
        if (e != undefined) {
          this.email$ = e
        }
      }
    });
  }
}
