import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BasicsComponent } from './basics/basics.component';
import { CustomMinDirective } from './directives/custom-min.directive';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [
    DynamicsComponent,
    SwitchesComponent,
    BasicsComponent,
    CustomMinDirective,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
