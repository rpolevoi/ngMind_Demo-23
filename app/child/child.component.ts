import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h4>{{childProp.name}} from {{childProp.city}}, {{childProp.country}} -- id:{{childProp.id}}
               - <span (click)="onClick()"><small><strong>(delete)</strong></small></span>
            </h4>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
  @Output() emitter = new EventEmitter;
  
  onClick() {this.emitter.emit(this.childProp);}
 
}
