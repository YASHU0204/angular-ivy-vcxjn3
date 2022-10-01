import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  function bulb_on_off1() {
    let bulb=document.getElementById("bulb1");
    if(bulb.src.match("off")) {
    bulb.src="on.jpg";
    } else {
    bulb.src="off.jpg";
    }
    }
    function bulb_on_off2() {
    let bulb=document.getElementById("bulb2");
    if(bulb.src.match("off")) {
    bulb.src="on.jpg";
    } else {
    bulb.src="off.jpg";
    }
    }
  
}
