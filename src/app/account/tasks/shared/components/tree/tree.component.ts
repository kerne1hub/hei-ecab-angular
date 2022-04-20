import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tasks-tree',
  templateUrl: 'tree.html',
  styleUrls: ['tree.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksTreeComponent { }
