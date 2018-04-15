import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColumn]'
})
export class ColumnDirective {

  @Input('columnName')
  private columnName: string;

  constructor(private templateRef: TemplateRef<any>) {
    console.log(this.templateRef);
  }

  get name() {
    return this.columnName;
  }

  get ref() {
    return this.templateRef;
  }

}
