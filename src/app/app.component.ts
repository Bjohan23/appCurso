import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { InfoAlumnoComponent } from './info-alumno/info-alumno.component'; // Importa InfoAlumnoComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaactualComponent, InfoAlumnoComponent], // Añade aquí el componente InfoAlumnoComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de usar styleUrls aquí
})
export class AppComponent {
  title = 'appCurso';
}
