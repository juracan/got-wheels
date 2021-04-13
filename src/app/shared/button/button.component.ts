import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = 'submit';
  @Input() label = 'Save';
  @Input() outline = false;

  constructor() {}

  ngOnInit(): void {}
}
