import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../vendehumos.service';

@Component({
  selector: 'app-lista-vendehumos',
  templateUrl: './lista-vendehumos.component.html',
  styleUrls: ['./lista-vendehumos.component.css']
})
export class ListaVendehumosComponent implements OnInit {
  vendehumos: Array<any> = [
    // {nombre: 'N1', tema: 'T1', rrss: []}, 
    // {nombre: 'N2', tema: 'T2', rrss: []}
  ]

  constructor(private vendehumosServ: VendehumosService){ }

  ngOnInit(): void {
    this.vendehumosServ.getAllVendehumos()
      .subscribe((datos: any) => {
        this.vendehumos = datos
      })
  }

}
