import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendehumosService } from '../vendehumos.service';
import { socket } from '../../main'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nuevoVendehumos = {
    nombre: '',
    tema: '',
    rrss: []
  }
  vhAPintar = null
  constructor(
    private vendehusmoServ: VendehumosService,
    private router: Router) { }

  ngOnInit(): void {
    socket.on('guardado', (datos) => {
      console.log({datos})
      this.vhAPintar = datos
    })
  }

  submit() {
    this.vendehusmoServ.createVendehumos(this.nuevoVendehumos)
      .subscribe(() => {
        //this.router.navigate(['/'])

      })
  }
}
