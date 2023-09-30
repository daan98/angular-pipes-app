import { Component } from '@angular/core';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name : string = 'Daniel';
  public gender : 'male' | 'female' = 'male';
  public invitationMap : any = {
    male: "He",
    female: "She"
  };

  // i18nPlural
  public clients : Array<string> = ['Daniel', 'Alejandra', 'Dario', 'Julia', 'Mario', 'Daniel', 'Alejandra', 'Dario', 'Julia', 'Mario'];
  public clientsMap = {
    '=0': 'there are no clients waiting',
    '=1': 'there is a client waiting',
    'other': 'there are # clients waiting'
  };

  // slice
  public rolesTechnologies : Array<any> = [
    {
      technology: 'Nodejs',
      role: 'backend'
    },
    {
      technology: 'Angular',
      role: 'frontend'
    },
    {
      technology: 'React',
      role: 'frontend'
    },
    {
      technology: 'Svelte',
      role: 'frontend'
    },
    {
      technology: 'Next',
      role: 'fullstack'
    },
    {
      technology: 'Laravel',
      role: 'backend'
    },
  ];

  // JSON AND KeyValue
  public jsonData : Object = {
    foo: 'bar',
    min: 0,
    max: 10.5,
    nested: {
      list: [1,2,3,4,5,6,7,8,9,10],
      xyz: true
    }
  };

  // KeyValue
  public map = new Map([[2, 'foo'], [1, 'bar']]);

  // Async
  public greeting : Promise<string> | null     = null;
  public arrived  : boolean                    = false;
  private resolve : Function | null = null;

  constructor() {
    this.reset();
  }

  // i18nSelect
  public changeClient(currentName : string, currentGender : 'male' | 'female') {
    this.name   = currentName;
    this.gender = currentGender;
  }

  // i18nPlural
  public deleteClient(): void {
    this.clients.shift();
  }

  // Async
  private reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  public handleOnClickPromise() {
    if(this.arrived) {
      this.reset();
      return;
    }

    this.resolve!('hi there');
    this.arrived = true;
  }

}
