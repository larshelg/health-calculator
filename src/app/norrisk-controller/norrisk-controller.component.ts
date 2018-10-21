import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FormService} from '../form.service';

@Component({
  selector: 'app-norrisk-controller',
  template: `<div class="container">
    <app-norrisk-form
  (gender)="setGender($event)"
  (smoker)="setSmoker($event)"
  (alder)="setAlder($event)"
  (familyCHD)="setFamilyCHD($event)"
  (hypertensjon)="setHypertensjon($event)"
  (hdl)="setHdl($event)"
    [risiko]="risiko"
    [skade]="skade"
    >
    </app-norrisk-form>
    </div>`,
  styleUrls: []

})
export class NorriskControllerComponent implements OnDestroy {
  gender = 'kvinne';
  smoker = false;
  age = 45;
  familyCHD = 0;
  hypertensjon = false;
  kolesterol = 4.0;
  hdl = false;
  systolic = 120;
  risiko = 1;
  skade = 'Lav Risiko';
  subscription: Subscription;

  constructor(private form: FormService){

    this.subscription = form.eventsConfirmed$.subscribe(
      event => {
        if('systolic' in event){
          this.systolic = event['systolic'];
        }
        if('age' in event){
          this.age = event['age'];
        }
        if('kolesterol' in event){
          this.kolesterol = event['kolesterol'];
        }
        this.calculate();

      });

  }

  calculate(){

    const age = this.age;
    const gender = this.gender === 'kvinne' ? 1 : 2;
    const A = this.age - 40;
    const S = (this.systolic - 120) / 10;
    const C = this.kolesterol - 4;
    const SMK = this.smoker ? 1 : 0;
    const BPmed = this.hypertensjon ? 1 : 0;
    const lowHDL = this.hdl ? 1 : 0;
    const familyCHD_1 = (this.familyCHD === 1 || this.familyCHD === 2) ? 1 : 0;
    const familyCHD_2 = this.familyCHD === 2 ? 1 : 0;

    //Calculate
    var w = gender === 2 ?
      0.11447* A -0.00043*Math.pow(A,2) + 0.22283* S + 0.35625* C + 0.91727* SMK-0.00896*C*A -0.00430*S*A-0.02051*SMK*A+0.27824*BPmed+0.33162* lowHDL+0.29986* familyCHD_1 + 0.59692* familyCHD_2 :
      0.13037* A - 0.00066 *Math.pow(A,2) + 0.25241 * S + 0.07235* C + 1.26781* SMK -0.00500*S*A -0.02456*SMK*A+0.19200*BPmed+0.32377* lowHDL+0.25361* familyCHD_1 +0.54909* familyCHD_2;

    const hr = Math.exp(w);
    const risk = gender === 2 ? 1-Math.exp(-hr * 0.00526) : 1-Math.exp(-hr * 0.00232);
    this.risiko = Math.floor(risk*100) > 0 ? Math.floor(risk * 100) : 1;


    this.skade = this.risiko < 4 && age < 55 ? 'Lav risiko' :
      this.risiko < 8 && age < 65 ? 'Lav risiko' :
        this.risiko < 12 ? 'Lav' :
          this.risiko < 5 && age < 55 ? 'Middels risiko' :
            this.risiko < 10 && age < 65 ? 'Middels risiko' :
              this.risiko < 15 ? 'Middels risiko' : 'Høy risiko';



  }


  setGender(event){
    this.gender = event;
    this.calculate();
  }

  setSmoker(event){
    this.smoker = event;
    this.calculate();
  }


  setFamilyCHD(event){
    this.familyCHD = event;
    this.calculate();
  }

  setHdl(event){
    this.hdl = event;
    this.calculate();
  }

  setHypertensjon(event){
    this.hypertensjon = event;
    this.calculate();
  }



  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
