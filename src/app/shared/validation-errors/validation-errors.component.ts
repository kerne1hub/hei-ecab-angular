import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'validation-errors',
  templateUrl: 'validation-errors.html',
  styleUrls: ['validation-errors.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorsComponent {
  @Input() messages: { [key: string]: string };
  @Input() controlErrors: ValidationErrors;
  @Input() orderFunction: (a: KeyValue<string, string>, b: KeyValue<string, string>) => number = () => 0;
}
