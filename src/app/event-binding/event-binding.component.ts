import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
 template:
`<div>
<button (click)="getSmaller()" title="smaller">-</button>
<button (click)="getBigger()" title="bigger">+</button>
<label [style.font-size.px]="size">FontSize: {{size}}px</label>
</div>`
   
})
export class EventBindingComponent {

@Input() size:number|string=1;
 
@Output() sizeChange = new EventEmitter<number>();
 
getSmaller() { this.resizeMe(-1); }
getBigger() { this.resizeMe(+1); }
resizeMe(delta: any) {
   
this.size = Math.min(40, Math.max(8, +this.size + delta));

this.sizeChange.emit(this.size);
}

}