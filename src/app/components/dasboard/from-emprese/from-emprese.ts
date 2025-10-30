import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empresa } from '../../../models/Empresa';
import { EmpresaService } from '../../../servicio/empresa-servicio';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-from-emprese',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './from-emprese.html',
  styleUrl: './from-emprese.css'
})
export class FromEmprese implements OnInit {
  empresaForm!: FormGroup;
  empresa!: Empresa | null;
  cargando = true;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      vision: ['', [Validators.required, Validators.maxLength(500)]],
      mision: ['', [Validators.required, Validators.maxLength(500)]],
      urlLogo: [''],
      activa: [false]
    });

    this.cargarEmpresaActiva();
  }

  cargarEmpresaActiva(): void {
    this.empresaService.obtenerActiva().subscribe({
      next: (data) => {
        this.empresa = data;
        this.empresaForm.patchValue(data);
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        this.mensaje = 'No hay empresa activa';
      }
    });
  }

  guardar(): void {
    if (this.empresaForm.invalid) {
      this.empresaForm.markAllAsTouched();
      return;
    }

    const valores = this.empresaForm.value;
    if (this.empresa?.id) {
      this.empresaService.actualizar(this.empresa.id, valores).subscribe({
        next: () => this.mensaje = 'Empresa actualizada correctamente ✅',
        error: () => this.mensaje = 'Error al actualizar la empresa ❌'
      });
    } else {
      this.empresaService.crear(valores).subscribe({
        next: () => this.mensaje = 'Empresa creada correctamente ✅',
        error: () => this.mensaje = 'Error al crear la empresa ❌'
      });
    }
  }
}
