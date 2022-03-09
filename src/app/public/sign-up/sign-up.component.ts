import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PublicSignUpPageFacade } from './sign-up.facade';
import { Observable } from 'rxjs';
import { Actions, FormGroupState } from 'ngrx-forms';
import { PublicSignUpPageForm } from './shared/forms';
import { ComponentStore } from '@ngrx/component-store';
import { configuration } from '@configurations';

@Component({
  selector: 'public-sign-up-page',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ComponentStore,
    PublicSignUpPageFacade
  ]
})
export class PublicSignUpPageComponent {
  public isSubmitting$: Observable<boolean>;
  public formState$: Observable<FormGroupState<PublicSignUpPageForm>>;

  public get recaptchaSiteKey(): string {
    return configuration.recaptcha.siteKey;
  }

  constructor(
    private facade: PublicSignUpPageFacade
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
