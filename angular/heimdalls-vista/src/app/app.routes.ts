import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonitoringComponent} from "./monitoring/monitoring.component";
import {IncidentsComponent} from "./incidents/incidents.component";

export class RouteConstants {
  public static readonly Monitors = $localize`:@@monitors:monitors`;
  public static readonly Incidents = $localize`:@@incidents:incidents`;
}

export const routes: Routes = [
  { path: RouteConstants.Monitors, component: MonitoringComponent },
  { path: RouteConstants.Incidents, component: IncidentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
