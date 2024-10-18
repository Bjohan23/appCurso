import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
    private alumnos: Alumno[] = [
        new Alumno(1, 'Juan', 'Pérez', 'Lima'),
        new Alumno(2, 'Ana', 'García', 'Arequipa'),
        new Alumno(3, 'Luis', 'Martínez', 'Cusco')
    ];

    constructor() { }

    getAlumnos(): Alumno[] {
        return this.alumnos;
    }
}
