import {Component, computed} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";
import {RouteConstants} from "../app.routes";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbar,
    MatToolbarRow,
    MatIcon,
    MatIconButton,
    MatSidenavContainer,
    MatNavList,
    MatAnchor
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  monitorsLink: string = RouteConstants.Monitors.toLowerCase();
  incidentsLink: string = RouteConstants.Incidents.toLowerCase();
}
