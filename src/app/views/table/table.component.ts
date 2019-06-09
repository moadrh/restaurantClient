import { Component, OnInit } from '@angular/core';
import { Table } from '../../shared/Table';
import { TableService } from './table.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: Table[];
  tableForm: FormGroup;
  operation: string = 'add';
  selectedTable: Table;

  constructor(private tableService: TableService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.initTable();
    this.loadTables();
  }

  createForm() {
    this.tableForm = this.fb.group({
      code: '',
    });
  }

  loadTables() {
    this.tableService.getTables().subscribe(
      data => { this.tables = data },
      error => { console.log('erreurrrrrrrr !') },
      () => { console.log('Le chargement des Tables est terminé') }
    );
  }

  addTable() {
    const s = this.tableForm.value;
    this.tableService.addTable(s).subscribe(
      res => {
        this.initTable();
        this.loadTables();
      }
    );
  }

  updateTable() {
    console.log('gggg '+this.selectedTable.code);
    this.tableService.updateTable(this.selectedTable).subscribe(
      res => {
        this.initTable();
        this.loadTables();
        this.operation = "add";
      }
    );
  }

  deleteTable() {
    this.tableService.deleteTable(this.selectedTable.id).subscribe(
      res => {
        this.selectedTable = new Table();
        this.loadTables();
      }
    );
  }

  initTable() {
    this.selectedTable = new Table();
    this.createForm();
  }

}
