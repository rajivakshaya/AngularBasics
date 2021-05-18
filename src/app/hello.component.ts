import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
template: `
<h1 [textContent]="'Name: ' + person.name"></h1>
<button (click)="person = boy" [disabled]="person.gender=='m'">boy</button>
<button (click)="person = girl" [disabled]="person.gender=='f'">girl</button>
<p><img [src]="person.photo" [alt]="person.name" [title]="person.name"></p>
`
})
export class HelloComponent  {
  @Input() name: string;

  private girl = {
name: 'Cadence Rayne',
gender: 'f',
photo: 'images/girl.jpg'
};

private boy = {
name: 'Bob Hendry',
gender: 'm',
photo: 'images/boy.jpg'
};
private person = this.boy;

}
