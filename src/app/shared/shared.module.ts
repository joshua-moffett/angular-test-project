import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { ColumnDirective } from './list/column.directive';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    ColumnDirective,
    ListComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnDirective,
    ListComponent,
    TagComponent
  ]
})
export class SharedModule {}
