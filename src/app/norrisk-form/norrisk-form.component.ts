import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormService} from '../form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-norrisk-form',
  templateUrl: './norrisk-form.component.html',
  styleUrls: ['./norrisk-form.component.css']
})
export class NorriskFormComponent {


  @Output() gender = new EventEmitter();
  @Output() smoker = new EventEmitter<boolean>();
  @Output() familyCHD = new EventEmitter();
  @Output() hypertensjon = new EventEmitter();
  @Output() hdl = new EventEmitter();
  @Input() risiko;
  @Input() skade;


  subscription: Subscription;

  constructor(private form: FormService) { }

  confirm(value) {
    this.form.confirmMission(value);
  }


}
