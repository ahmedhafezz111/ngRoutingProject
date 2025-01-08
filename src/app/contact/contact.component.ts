import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // isTyping:boolean = false


  // typingView(event:Event):void{
  //   this.isTyping=true
  //   
  //   this.isTyping = this.inputVal.length>0
  // }
  inputVal:string =''
  userNameTyping: boolean = false;
  userAgeTyping: boolean = false;
  userEmailTyping: boolean = false;
  userPasswordTyping: boolean = false;

   typingView(inputName:string,event:Event):void{
  this.inputVal = (event.target as HTMLInputElement).value
   if(inputName == "userName"){
    this.userNameTyping = this.inputVal.length > 0;
   }
   if(inputName == "userAge"){
    this.userAgeTyping = this.inputVal.length > 0;
   }
   if(inputName == "userEmail"){
    this.userEmailTyping = this.inputVal.length > 0;
   }
   if(inputName == "userPassword"){
    this.userPasswordTyping = this.inputVal.length > 0;
   }

  }
}
