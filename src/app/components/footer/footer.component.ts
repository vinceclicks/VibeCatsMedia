import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider"
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, DividerModule, NgOptimizedImage, RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
