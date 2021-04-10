import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/facades/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onLoginClick(): void {
    this.authService.getAuthorization({
      userName: 'juracan',
      password: '123456',
    });
  }
}
