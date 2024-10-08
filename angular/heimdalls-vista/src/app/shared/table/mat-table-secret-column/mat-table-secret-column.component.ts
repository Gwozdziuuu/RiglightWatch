import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {HideSecretPipe} from "../../pipes/hide-secret.pipe";

@Component({
  selector: 'app-mat-table-secret-column',
  templateUrl: './mat-table-secret-column.component.html',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    HideSecretPipe,
    MatIconButton
  ],
  styleUrls: ['./mat-table-secret-column.component.scss']
})
export class MatTableSecretColumnComponent {
  @Input() id!: any;
  @Input() secret!: string;
  @Input() columnKey!: string;
  @Input() isVisible: boolean = false;
  @Output() visibilityChanged = new EventEmitter<any>();

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    this.visibilityChanged.emit({ id: this.id, columnKey: this.columnKey, isVisible: this.isVisible });
  }
}
