import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'account-badge',
  templateUrl: 'badge.html',
  styleUrls: ['badge.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBadgeComponent {
  @Input() count: number;
  @Input() color: string;
}
