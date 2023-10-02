import { Component } from '@angular/core';
import { HeroInterface, Color } from '../../interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  // toggle case
  public welcomeText : string                         = 'Welcome to the custom pipe';
  public isUpperCase : boolean                        = false;
  public sort        : keyof HeroInterface | undefined;
  public heroes      : HeroInterface[]                = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Shazam',
      canFly: true,
      color: Color.red
    },
  ];

  public handleOnClickToggle() {
    console.log('Color.black: ', Color.black);
    console.log('Color.black: ', Color);
    this.isUpperCase = !this.isUpperCase;
  }

  public handleSortBy(sortTerm : keyof HeroInterface) {
    this.sort = sortTerm;
  }
}
