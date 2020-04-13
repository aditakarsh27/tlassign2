import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi';
  clickbut= 'dehaze';
  day='0';
  onclick()
  {
    if(this.clickbut=='dehaze')
      this.clickbut='clear';
    else
      this.clickbut='dehaze';
  }
  d0()
  {
    this.day='0';
  }
  d1()
  {
    this.day='1';
  }
  d2()
  {
    this.day='2';
  }
}
