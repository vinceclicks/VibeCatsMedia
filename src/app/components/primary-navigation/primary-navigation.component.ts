import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primary-navigation',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './primary-navigation.component.html',
  styleUrl: './primary-navigation.component.scss'
})
export class PrimaryNavigationComponent {

}
