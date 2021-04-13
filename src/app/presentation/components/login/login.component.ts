import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  onLoginClick(): void {
    // this.authService.getAuthorization({
    //   userName: 'juracan',
    //   password: '123456',
    // });
  }
}
