import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css']
})
export class TagComponent {

  @Input()
  color: string;

  @Input()
  height: number;

  @Input()
  text: string;

  @Input()
  width: number;

  get styles() {
    return {
      'background-color': this.color,
      'height': this.height + 'px',
      'width': this.width + 'px',
    };
  }

}
