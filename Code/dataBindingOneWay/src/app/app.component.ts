import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  /*isDisabled:boolean=true
  arr:string[]=[ "alice","charlie","john","hunter"]
  n=this.arr[0];
  i=0;
  change() {
    this.i++;
    this.n=this.arr[this.i];
    if(this.i==3){
      this.i=-1;
      this.isDisabled=false
    }
  }*/


clickable:boolean=false;
  n:string='SAITEJA';
  imgUrl:string='https://www.indiainputs.com/wp-content/uploads/2025/01/Shinchan.webp';
  change(){
    if(this.n=="SAITEJA"){
            this.n='doraemon';
            this.imgUrl='https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png';
          }
    else {
      this.n='SAITEJA';
      this.imgUrl='https://www.indiainputs.com/wp-content/uploads/2025/01/Shinchan.webp';
    }
  }
}