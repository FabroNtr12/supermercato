import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonButtons,
  AlertController
} from '@ionic/angular/standalone';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonButtons,
  ]
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

  async login() {
    this.authService.login(this.username, this.password).subscribe({
      next: async (res: any) => {
        console.log(res);
        const alert = await this.alertCtrl.create({
          header: 'Login Riuscito',
          message: `Benvenuto, ${this.username}!`,
          buttons: [{
            text: "OK",
            handler: () => {
              if (res.user.role === 'admin') {
                this.router.navigate(['/dashboard-admin']);
              } else if (res.user.role === 'manager') {
                this.router.navigate(['/dashboard-manager']);
              } else if (res.user.role === 'customer') {
                this.router.navigate(['/dashboard-customer']);
              }
            }
          }],
        });
        await alert.present();
      },
      error: async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Errore',
          message: err.error?.error || 'Username o password errati.',
          buttons: ['Riprova'],
        });
        await alert.present();
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}