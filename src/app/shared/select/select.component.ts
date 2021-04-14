import {
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ILabelValue } from 'src/app/core/interfaces/label-value.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  @Input() options: ILabelValue[] = [];

  @Output() changed = new EventEmitter<ILabelValue>();

  value = null;
  disabled = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngAfterViewInit(): void {}

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // event
  OnSelectChange(item: any): void {
    this.onChange(item);
    this.changed.emit(item);
    console.info(item);
  }
}
