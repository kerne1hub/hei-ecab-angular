import { AccountState } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import { AccountActions } from './actions';

const initialState = new AccountState();

const reducer = createReducer(
  initialState,
  on(AccountActions.resetState, () => initialState),
  on(AccountActions.setContentSidebarState, (state, { sidebarState }) => ({
    ...state,
    contentSidebarState: sidebarState
  })),
  on(AccountActions.toggleContentSidebar, (state) => ({
    ...state,
    contentSidebarState: state.contentSidebarState === ('collapsed') ? 'expanded' : 'collapsed'
  }))
);

export const accountReducer = (state: AccountState | undefined, action: Action): AccountState => reducer(state, action);
