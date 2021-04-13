import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent extends Toast implements OnInit {
  constructor(messageService: MessageService, cd: ChangeDetectorRef) {
    super(messageService, cd);
  }

  ngOnInit(): void {}
}
