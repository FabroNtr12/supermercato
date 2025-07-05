import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonList
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonList,
    RouterModule,
  ]
})

export class HomePage {
  private res: any = {};
  public users: any = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.dashboard().subscribe({
      next: async (data: any) => {
        
      },
      error: (err) => {
        console.error("Errore caricamento utenti", err);
      }
    })
  }
}
