import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circular-nav',
  templateUrl: './nav-bar-circular.component.html',
  styleUrls: ['./nav-bar-circular.component.css'],
})
export class NavBarCircularComponent implements OnInit {
  srart_pos = 90.75;
  item_count = 13;
  s = (0.52 * Math.PI) / 180;
  pos = [];
  elem = document.getElementsByClassName('item');

  constructor() {
    //this.allocationItems();
  }

  ngOnInit() {
    // console.log(this.elem);
    this.allocationItems();
  }

  allocationItems() {
    var i;
    var pp = this.elem[6]
      ?.getElementsByTagName('a')[0]
      .getAttribute('data-img');
    document.getElementById('pic').style.backgroundImage = "url('" + pp + "')";
    document.getElementById('pic').className = 'img-box';
    this.pos[0] = this.srart_pos;
    for (i = 1; i < this.item_count; i++) {
      this.pos[i] = this.pos[i - 1] - 0.2;
    }
    for (i = 0; i < this.item_count + 1; i++) {
      let a = this.elem[i] as HTMLElement;
      a.style.left = 240 + 250 * Math.sin(this.pos[i]) + 'px';
      a.style.top = 240 + 250 * Math.cos(this.pos[i]) + 'px';
    }
  }
  animation(args, flag) {
    try {
      var $ = {
        radius: 250,
        speed: 10,
      };
      var e = this.elem;
      document.getElementById('pic').className = 'hide';
      function animate(draw, duration, callback) {
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
          var timePassed = time - start;
          console.log(time, start);
          if (timePassed > duration) timePassed = duration;
          draw(timePassed);
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          } else callback();
        });
      }
      animate(
        (timePassed) => {
          var i;

          console.log(this.item_count);

          for (i = 0; i < this.item_count; i++) {
            console.log();
            let a = this.elem[i] as HTMLElement;
            a.style.left = 240 + $.radius * Math.sin(this.pos[i]) + 'px';
            a.style.top = 240 + $.radius * Math.cos(this.pos[i]) + 'px';
            if (flag) {
              this.pos[i] += this.s;
            } else {
              this.pos[i] -= this.s;
            }
          } /* callback function */
        },
        400,
        () => {
          var list = document.getElementById('list');
          var ch = flag ? list.firstElementChild : list.lastElementChild;
          ch.remove();
          if (flag) {
            list.appendChild(ch);
          } else {
            list.insertBefore(ch, list.firstChild);
          }
          this.allocationItems();
        }
      );
    } catch (errr) {
      console.log('error1 ', errr);
    }
  }
}
