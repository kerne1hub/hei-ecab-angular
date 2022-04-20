import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-tree-item',
  templateUrl: 'tree-item.html',
  styleUrls: ['tree-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksTreeItemComponent { }
