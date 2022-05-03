import { SidebarState } from '@shared/sidebar';

export class AccountState {
  public contentSidebarState: SidebarState;

  constructor() {
    this.contentSidebarState = 'none';
  }
}
