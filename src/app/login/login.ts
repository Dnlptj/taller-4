import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  usuario = '';
  clave = '';
  error = signal(false);

  entrar(): void {
    if (this.auth.login(this.usuario, this.clave)) {
      this.router.navigate(['/productos']);
    } else {
      this.error.set(true);
    }
  }
}
