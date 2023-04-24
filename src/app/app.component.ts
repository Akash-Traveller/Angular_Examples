import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public columnDefs: ColDef[] = [
    { field: 'athlete', headerName: 'The full Name of the athlete' },
    {
      field: 'age',
      headerName: 'The number of Years since the athlete was born',
      initialWidth: 120,
    },
    { field: 'country', headerName: 'The Country the athlete was born in' },
    { field: 'sport', headerName: 'The Sport the athlete participated in' },
    {
      field: 'total',
      headerName: 'The Total number of medals won by the athlete',
    },
  ];
  public defaultColDef: ColDef = {
    resizable: true,
    // initialWidth: 200,
    wrapHeaderText: true,
    autoHeaderHeight: true,
  };
  public rowData!: any[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => (this.rowData = data));
  }

}