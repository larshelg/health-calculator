import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NorriskFormComponent } from './norrisk-form/norrisk-form.component';
import {FormService} from './form.service';
import { ChadsFormComponent } from './chads-form/chads-form.component';
import { NorriskControllerComponent } from './norrisk-controller/norrisk-controller.component';
import { ChadsControllerComponent } from './chads-controller/chads-controller.component';


const appRoutes: Routes = [
  { path: 'norrisk', component: NorriskControllerComponent },
  { path: '', component: NorriskControllerComponent },
  { path: 'chads',    component: ChadsControllerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NorriskFormComponent,
    ChadsFormComponent,
    NorriskControllerComponent,
    ChadsControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
