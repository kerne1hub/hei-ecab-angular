import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { SidebarState } from '@shared/sidebar';
import { AccountState } from './state';

const selectFeature = (state: AppState) => state.account;

export class AccountSelectors {
  public static contentSidebarState: MemoizedSelector<AppState, SidebarState> = createSelector(
    selectFeature,
    (state: AccountState) => state.contentSidebarState
  );
}
