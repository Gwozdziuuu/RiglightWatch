import {Component, computed, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";
import {RouteConstants} from "../app.routes";
import {DOCUMENT} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {getAppState, setAppState} from "../configuration/app-state";
import {$localize} from "@angular/localize/init";

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
    MatAnchor,
    MatTooltip
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private _document = inject(DOCUMENT);
  state = getAppState();

  monitorsLink: string = RouteConstants.Monitors.toLowerCase();
  incidentsLink: string = RouteConstants.Incidents.toLowerCase();

  toggleTheme(value = !this.state.darkTheme) {
    this.state.darkTheme = value;
    this._document.body.classList.toggle('demo-unicorn-dark-theme', value);
    setAppState(this.state);
  }

  get tooltipText(): string {
    return this.state.darkTheme
      ? $localize`:@@toggle.light.theme:Toggle light theme`
      : $localize`:@@toggle.dark.theme:Toggle dark theme`
  }

  protected readonly $localize = $localize;
}
