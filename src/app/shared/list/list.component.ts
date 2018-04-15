import { Component, ContentChildren, Input, AfterContentInit, QueryList } from '@angular/core';

import { Column } from './column';
import { ColumnDirective } from './column.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterContentInit {

  @ContentChildren(ColumnDirective)
  contentChildren: QueryList<ColumnDirective>;

  @Input()
  items: any;

  @Input()
  columns: Column[];

  ngAfterContentInit() {
    console.log(this.contentChildren);
  }

  useTemplate(name: string) {
    const template = this.contentChildren.find(child => child.name === name);

    return template ? template.ref : null;
  }

}
