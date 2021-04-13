import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLead = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.dashboardCheck(event.url);
        this.passwordRecoveryCheck(event);
      }
    });
  }

  passwordRecoveryCheck(event: any): void {
    if (event) {
    }
  }

  dashboardCheck(url: string): void {
    if (url === '/dashboard') {
      this.showLead = true;
    } else {
      this.showLead = false;
    }
  }
}
