import { RouterReducerState } from '@ngrx/router-store';
import { AccountState } from '@app/account/account.state';

export class AppState {
  public router: RouterReducerState<any>;
  public account?: AccountState;
}
