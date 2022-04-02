import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { PublicSignUpConfirmPageForm } from './shared/forms';
import { HttpErrorResponse } from '@angular/common/http';

export class PublicSignUpConfirmPageState {
  public isSubmitting: boolean;
  public formState: FormGroupState<PublicSignUpConfirmPageForm>;
  public errorResponse: HttpErrorResponse;

  constructor() {
    this.isSubmitting = false;
    this.formState = createFormGroupState<PublicSignUpConfirmPageForm>('PublicSignUpConfirmPageForm', {
      firstName: '',
      lastName: '',
      patronymic: '',
      dayOfBirth: null,
      monthOfBirth: null,
      yearOfBirth: null,
      seriesOfDocument: null,
      numberOfDocument: null,
      role: null,
      agreement: false
    });
    this.errorResponse = null;
  }
}
