import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PublicSignUpConfirmPageFacade } from './confirm.facade';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { Actions, FormGroupState } from 'ngrx-forms';
import { PublicSignUpConfirmPageForm } from './shared/forms';

@Component({
  selector: 'public-sign-up-confirm-page',
  templateUrl: 'confirm.html',
  styleUrls: ['confirm.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ComponentStore,
    PublicSignUpConfirmPageFacade
  ]
})
export class PublicSignUpConfirmPageComponent {
  public isSubmitting$: Observable<boolean>;
  public formState$: Observable<FormGroupState<PublicSignUpConfirmPageForm>>;

  constructor(
    private facade: PublicSignUpConfirmPageFacade
  ) {
    this.isSubmitting$ = this.facade.isSubmitting$;
    this.formState$ = this.facade.formState$;
  }

  public formSubmitted(): void {
    // TODO
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleFormStateAction(action);
  }
}
