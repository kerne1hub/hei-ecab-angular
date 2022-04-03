import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'account-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountHeaderComponent { }
