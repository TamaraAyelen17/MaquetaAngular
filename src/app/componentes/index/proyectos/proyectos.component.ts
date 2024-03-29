import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
proyecto: any = [];
constructor(private datos: DatosService) { }

ngOnInit(): void {
  this.datos.getDatos().subscribe(data => {
    this.proyecto = data.proyectos;
  })
}

}
