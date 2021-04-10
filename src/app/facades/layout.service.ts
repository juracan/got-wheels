import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  private leadVisible = new BehaviorSubject<boolean>(true);
  leadVisible$ = this.leadVisible.asObservable();

  constructor() {}

  showLead(): void {
    this.leadVisible.next(true);
  }

  hideLead(): void {
    this.leadVisible.next(false);
  }

  showLoading(): void {
    this.leadVisible.next(true);
  }

  hideLoading(): void {
    this.leadVisible.next(false);
  }

}
