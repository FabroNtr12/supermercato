import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supermercato',
  templateUrl: './supermercato.page.html',
  styleUrls: ['./supermercato.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButtons,
    IonButton,
    IonIcon,
    RouterModule
  ]
})
export class SupermercatoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
