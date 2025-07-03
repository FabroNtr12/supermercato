import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonRadioGroup,
  IonRadio,
  IonList,
  AlertController
} from '@ionic/angular/standalone';
 
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonRadioGroup,
    IonRadio,
    IonList
  ]
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  ruolo: string = '';
 
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
 
  ngOnInit() {}
 
  async register() {
    this.authService.register(this.username, this.password, this.ruolo, this.email).subscribe({
      next: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Registrazione completata',
          message: 'Ora puoi effettuare il login.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/login']);
      },
      error: async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Errore',
          message: err.error?.error || 'Registrazione fallita.',
          buttons: ['Riprova'],
        });
        await alert.present();
      }
    });
  }
 
  goToLogin() {
    this.router.navigate(['/login']);
  }
}