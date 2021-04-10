import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICredentials } from '../interfaces/credentials.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationIntegrationService {
  private authorized = new BehaviorSubject<boolean>(false);
  authorized$ = this.authorized.asObservable();

  private userInfo = new BehaviorSubject<IUser | null>(null);
  userInfo$ = this.userInfo.asObservable();

  constructor() {}

  getIntegrationAuthentication(credentials: ICredentials): void {
    this.authorized.next(true);
    this.userInfo.next({
      userName: 'Juracan',
      email: 'juracan@gmail.com',
      userId: 1,
    });
  }
}
