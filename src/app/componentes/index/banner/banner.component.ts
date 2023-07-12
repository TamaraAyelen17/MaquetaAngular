import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  nombre: string = '';
  apellido: string = '';
  titulo: string= '';
  imagenPerfil: string='';

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.titulo = data.titulo;
      this.imagenPerfil = data.imagenPerfil;
    })
  }
}
