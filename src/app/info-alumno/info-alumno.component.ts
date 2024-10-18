import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AlumnoService } from '../alumno.service';

export class Alumno {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public ciudad: string;

    constructor(id: number, nombre: string, apellidos: string, ciudad: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
    }
}

@Component({
  selector: 'app-info-alumno',
  standalone: true,
  imports: [CommonModule], // Asegúrate de agregar esto
  templateUrl: './info-alumno.component.html',
  styleUrls: ['./info-alumno.component.css']
})
export class InfoAlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnos();
  }
}
