import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-probador-virtual',
  templateUrl: './probador-virtual.component.html',
  styleUrls: ['./probador-virtual.component.css']
})
export class ProbadorVirtualComponent {

  // Variable para almacenar la imagen capturada
  capturedImage: string | any;

  // Variable para el gatillo de la captura
  private _trigger = new Subject<void>();
  public readonly captureTrigger = this._trigger.asObservable();

  constructor() { }

  // Método para capturar una imagen
  capture(): void {
    this._trigger.next();
  }
}
