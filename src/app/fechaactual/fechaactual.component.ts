import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-fechaactual',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css'] // Corrige styleUrl a styleUrls
})
export class FechaactualComponent {
  hoy: any = new Date();
}
