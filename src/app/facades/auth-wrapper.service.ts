import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthWrapperService {
  metadata: any;

  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((profile) => {
      this.user.next(profile);
    });

    auth.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.isAuthenticated.next(authenticated);
    });
  }

  showLoginModal(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: document.location.origin });
  }
}
