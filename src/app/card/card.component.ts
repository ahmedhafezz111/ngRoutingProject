import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  hideModal:boolean=false
  isClicked:boolean=false
  viewImg:string=''

  
showModal(image:HTMLImageElement):void{
let imgSrc =image.src.split("http://localhost:4200").join("")

this.viewImg = imgSrc
this.isClicked=true
this.hideModal=false

console.log(this.viewImg);

    // alert(imgSrc)
    
 }
noModal():void{
this.hideModal=true
}

}
