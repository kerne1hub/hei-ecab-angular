import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'account-badge',
  templateUrl: 'badge.html',
  styleUrls: ['badge.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBadgeComponent {
  @Input() value: string | number;
  @Input() color: string;
  @Input() hasDeleteAction: boolean;

  @Output() deleteActionTriggered: EventEmitter<void>;

  constructor() {
    this.hasDeleteAction = false;
    this.deleteActionTriggered = new EventEmitter<void>();
  }
}
