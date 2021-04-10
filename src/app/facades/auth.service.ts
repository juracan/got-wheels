import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationIntegrationService } from '../core/authorization/authorization-integration.service';
import { ICredentials } from '../core/interfaces/credentials.interface';
import { IUser } from '../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authIntegration: AuthorizationIntegrationService) {}

  getAuthorized$(): Observable<boolean> {
    return this.authIntegration.authorized$;
  }

  getUserInfo$(): Observable<IUser | null> {
    return this.authIntegration.userInfo$;
  }

  getAuthorization(credentials: ICredentials): void {
    this.authIntegration.getIntegrationAuthentication(credentials);
  }
}
