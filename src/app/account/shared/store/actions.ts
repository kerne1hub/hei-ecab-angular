import { createAction, props } from '@ngrx/store';
import { SidebarState } from '@shared/sidebar';

export class AccountActions {
  public static resetState = createAction(
    '[Account] Reset State'
  );

  public static setContentSidebarState = createAction(
    '[Account] Set sidebar state',
    props<{ sidebarState: SidebarState }>()
  );

  public static toggleContentSidebar = createAction(
    '[Account] Toggle sidebar'
  );
}
