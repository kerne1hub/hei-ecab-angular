import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'account-sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSidebarComponent { }
