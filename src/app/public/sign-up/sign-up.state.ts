import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { PublicSignUpPageForm } from './shared/forms';
import { HttpErrorResponse } from '@angular/common/http';

export class PublicSignUpPageState {
  public isSubmitting: boolean;
  public formState: FormGroupState<PublicSignUpPageForm>;
  public errorResponse: HttpErrorResponse;

  constructor() {
    this.isSubmitting = false;
    this.formState = createFormGroupState<PublicSignUpPageForm>('PublicSignUpPageForm', {
      firstName: '',
      lastName: '',
      email: '',
      recaptcha: ''
    });
    this.errorResponse = null;
  }
}
