import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard-customer',
  templateUrl: './dashboard-customer.page.html',
  styleUrls: ['./dashboard-customer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, CommonModule, FormsModule, MatButtonModule]
})
export class DashboardCustomerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
