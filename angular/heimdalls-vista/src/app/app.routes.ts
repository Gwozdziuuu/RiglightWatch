import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonitoringComponent} from "./monitoring/monitoring.component";
import {IncidentsComponent} from "./incidents/incidents.component";

export const routes: Routes = [
  { path: 'monitors', component: MonitoringComponent },
  { path: 'incidents', component: IncidentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
