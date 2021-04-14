import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { AuthWrapperService } from 'src/app/facades/auth-wrapper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileJson: any;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public authWrapper: AuthWrapperService
  ) {}

  ngOnInit(): void {}
}
