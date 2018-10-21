import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormService} from './form.service';


@Component({
  selector: 'app-root',
  template: `<div class="container">
    <nav>
      <a routerLink="/norrisk" routerLinkActive="active">Norrisk kalkulator ></a>
      <a routerLink="/chads" routerLinkActive="active">Chads kalkulator ></a>
    </nav>
    <router-outlet></router-outlet>
    <footer class="footer is-primary">
      <div class="content has-text-centered">
        <p>
          <strong>DEMO</strong> 
        </p>
        <div>Responsive demo of two heath calculators. Should work on both desktop and mobile</div>
      </div>
    </footer>
  
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {




}
