import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string="Saiteja";
  //title="RRR";
  title='';
  fun(){
    console.log("hello");
    //this.tile="Shinchan";
    this.name="Shinchan";
  }
}