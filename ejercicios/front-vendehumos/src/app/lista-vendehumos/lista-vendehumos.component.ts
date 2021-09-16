import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vendehumos',
  templateUrl: './lista-vendehumos.component.html',
  styleUrls: ['./lista-vendehumos.component.css']
})
export class ListaVendehumosComponent implements OnInit {
  vendehumos: Array<any> = [
    {nombre: 'N1', tema: 'T1', rrss: []}, 
    {nombre: 'N2', tema: 'T2', rrss: []}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
