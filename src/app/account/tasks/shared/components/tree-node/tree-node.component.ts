import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-tree-node',
  templateUrl: 'tree-node.html',
  styleUrls: ['tree-node.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksTreeNodeComponent {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
  }

  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
