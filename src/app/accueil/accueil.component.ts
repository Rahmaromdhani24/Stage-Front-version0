import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  public constructor(private router : Router ) { }

  deconnexion(){
    this.router.navigate(['/login']); 
  }
}
