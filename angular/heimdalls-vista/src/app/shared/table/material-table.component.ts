/** material-table.component.ts **/
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {TableColumn, VisibilityChangeEvent} from "./shared/types";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {MatTableSecretColumnComponent} from "./mat-table-secret-column/mat-table-secret-column.component";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    NgSwitch,
    MatCellDef,
    MatTableSecretColumnComponent,
    MatHeaderCell,
    MatCell,
    NgSwitchDefault,
    NgSwitchCase,
    MatHeaderCellDef,
    NgForOf,
    MatRowDef,
    MatRow,
    NgIf,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator
  ],
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit, OnChanges {
  @Input() data: any[] | null = [];
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  @Input() columns: TableColumn[] = [];
  @Input() showHeader: boolean = true;

  @Output() visibilityChangeEvent = new EventEmitter<VisibilityChangeEvent>();
  @Output() pageChangeEvent = new EventEmitter<PageEvent>();

  displayedColumns: string[] = [];

  ngOnInit(): void {
    if (!this.data) {
      this.data = [];
    }
    this.displayedColumns = this.columns.map(c => c.key);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].currentValue) {
      this.data = [];
    }
  }

  handleVisibilityChange(event: { id: any; columnKey: string, isVisible: boolean; }): void {
    this.visibilityChangeEvent.emit(event);
  }
}
