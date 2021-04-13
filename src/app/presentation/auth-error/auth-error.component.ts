import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth-error',
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.scss'],
})
export class AuthErrorComponent implements OnInit {
  public error$: Observable<any> = this.auth.error$;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    timer(0)
      .pipe(takeUntil(this.error$))
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
