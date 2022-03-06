import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { containDigit, containLowercase, containSymbol, containUppercase, minLength } from './validators';
import { isEmpty, range } from 'lodash';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FormControlState } from 'ngrx-forms';

@Component({
  selector: 'password-strength',
  templateUrl: 'password-strength.html',
  styleUrls: ['password-strength.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordStrengthComponent {
  @Input() controlState: FormControlState<string>;
  @Input() fairLevel: number = 2;
  @Input() goodLevel: number = 3;
  @Input() strongLevel: number = 4;
  @Input() veryStrongLevel: number = 5;
  @Input() weakLevelText: string;
  @Input() fairLevelText: string;
  @Input() goodLevelText: string;
  @Input() strongLevelText: string;
  @Input() veryStrongLevelText: string;
  @Input() validators: Array<(value: string) => { [x: string]: boolean } | null> = [
    minLength(8),
    containDigit,
    containLowercase,
    containSymbol,
    containUppercase
  ];

  public get validatorsRange(): Array<number> {
    return range(this.validators.length);
  }

  public get successCount$(): Observable<number> {
    return of(this.controlState)
      .pipe(
        map((controlState) => {
          if (controlState.value && controlState.errors.minLength) {
            return 1;
          } else {
            return this.validators
              .map<number>((validator) => (isEmpty(validator(controlState.value))) ? 1 : 0)
              .reduce((result, validatorResult) => result + validatorResult, 0);
          }
        })
      );
  }
}
