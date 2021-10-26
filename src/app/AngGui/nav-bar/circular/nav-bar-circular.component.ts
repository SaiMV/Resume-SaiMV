import { Component } from '@angular/core';

@Component({
  selector: 'circular-nav',
  templateUrl: './nav-bar-circular.component.html',
  styleUrls: ['./nav-bar-circular.component.css'],
})
export class NavBarCircularComponent {
  srart_pos = 90.75;
  item_count = 13;
  s = (0.52 * Math.PI) / 180;
  pos = [];
  elem = document.getElementsByClassName('item');
  constructor() {
    this.allocationItems();
  }
  allocationItems() {
    let i;
    let pp = this.elem[6]
      ?.getElementsByTagName('a')[0]
      .getAttribute('data-img');
    document.getElementById('pic').style.backgroundImage = "url('" + pp + "')";
    document.getElementById('pic').className = 'img-box';
    this.pos[0] = this.srart_pos;
    for (i = 1; i < this.item_count; i++) {
      this.pos[i] = this.pos[i - 1] - 0.2;
      this.srart_pos = this.pos[i];
    }
    for (i = 0; i < this.item_count + 1; i++) {
      // this.elem[i].style.left = 240 + 250 * Math.sin(this.pos[i]) + 'px';
      // this.elem[i].style.top = 240 + 250 * Math.cos(this.pos[i]) + 'px';
    }
  }
}
