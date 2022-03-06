import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { PublicLogInPageForm } from './shared/forms';

export class PublicLogInPageState {
  public isSubmitting: boolean;
  public formState: FormGroupState<PublicLogInPageForm>;
  public isLoginFailed: boolean;

  constructor() {
    this.isSubmitting = false;
    this.formState = createFormGroupState<PublicLogInPageForm>('PublicLogInForm', {
      email: '',
      password: ''
    });
    this.isLoginFailed = false;
  }
}
