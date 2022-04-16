import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'schedule-node',
  templateUrl: 'node.html',
  styleUrls: ['node.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountScheduleNodeComponent {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
  }

  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
