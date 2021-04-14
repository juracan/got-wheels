import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthWrapperService } from 'src/app/facades/auth-wrapper.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public authWrapper: AuthWrapperService) {}

  ngOnInit(): void {}
}
