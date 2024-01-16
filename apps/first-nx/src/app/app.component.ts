import { Component } from '@angular/core';

@Component({
  selector: 'test-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-nx';

  myMethod(){
    console.log("hi");
  }

  method2(){
    this.myMethod();
    console.log("bye");
  }
}
