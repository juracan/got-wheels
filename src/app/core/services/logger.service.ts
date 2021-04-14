import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logMessages = true;
  infoMessages = true;
  warnMessages = true;
  errorMessages = true;

  constructor() {}

  showMessages(): void {
    this.logMessages = true;
    this.infoMessages = true;
    this.warnMessages = true;
    this.errorMessages = true;
  }

  hideMessages(): void {
    this.logMessages = false;
    this.infoMessages = false;
    this.warnMessages = false;
    this.errorMessages = false;
  }

  showLogMessages(): void {
    this.logMessages = true;
  }

  hideLogMessages(): void {
    this.logMessages = false;
  }

  showInfoMessages(): void {
    this.infoMessages = true;
  }

  hideInfoMessages(): void {
    this.infoMessages = false;
  }

  showWarnMessages(): void {
    this.warnMessages = true;
  }

  hideWarnMessages(): void {
    this.warnMessages = false;
  }

  showErrorMessages(): void {
    this.errorMessages = true;
  }

  hideErrorMessages(): void {
    this.errorMessages = false;
  }

  log(message: any): void {
    if (this.logMessages) {
      const nerd = String.fromCodePoint(0x1f913);
      console.log(nerd + message);
    }
  }

  info(message: any): void {
    if (this.infoMessages) {
      console.log(
        '%c ' + message,
        'color:white;background-color:blue;font-style:italic'
      );
    }
  }

  warn(message: any): void {
    if (this.warnMessages) {
      console.log(
        '%c ' + message,
        'color:white;background-color:orange;font-style:italic'
      );
    }
  }

  error(message: any): void {
    if (this.errorMessages) {
      console.log(
        '%c ' + message,
        'color:white;background-color:red;font-style:bold'
      );
    }
  }
}
