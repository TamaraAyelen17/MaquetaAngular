import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  redes: any = [];

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redes = data.redes;
    })
  }
}
