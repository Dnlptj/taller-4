import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _logueado = signal(localStorage.getItem('sesion') === 'activa');
  logueado = this._logueado.asReadonly();

  login(usuario: string, clave: string): boolean {
    if (usuario === 'admin' && clave === 'admin') {
      localStorage.setItem('sesion', 'activa');
      this._logueado.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('sesion');
    this._logueado.set(false);
  }

  estaLogueado(): boolean {
    return this._logueado();
  }
}
