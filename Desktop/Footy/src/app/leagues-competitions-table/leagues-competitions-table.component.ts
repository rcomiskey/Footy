import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { LeaguesCompetitionsTableDataSource } from './leagues-competitions-table-datasource';

@Component({
  selector: 'leagues-competitions-table',
  templateUrl: './leagues-competitions-table.component.html',
  styleUrls: ['./leagues-competitions-table.component.css']
})
export class LeaguesCompetitionsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: LeaguesCompetitionsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'amount'];

  ngOnInit() {
    this.dataSource = new LeaguesCompetitionsTableDataSource(this.paginator, this.sort);
  }
}
