/* border-layout.component.ts */
import {Component, HostBinding, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-border-layout',
  templateUrl: './border-layout.component.html',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    NgStyle
  ],
  styleUrls: ['./border-layout.component.scss']
})
export class BorderLayoutComponent {
  @Input() showTop: boolean = false;
  @Input() showLeft: boolean = false;
  @Input() showCenter: boolean = false;
  @Input() showRight: boolean = false;
  @Input() showBottom: boolean = false;
  @Input() showSeparators: boolean = false;
  @Input() showExpandable: boolean = false;

  @Input() rightWidthMin: string = '20%';
  @Input() rightWidthMax: string = '40%';

  @Input() leftWidthMin: string = '20%';
  @Input() leftWidthMax: string = '40%';

  expandLeft: boolean = false;
  expandRight: boolean = false;

  toggleLeftExpansion(): void {
    this.expandLeft = !this.expandLeft;
  }

  toggleRightExpansion(): void {
    this.expandRight = !this.expandRight;
  }
}
