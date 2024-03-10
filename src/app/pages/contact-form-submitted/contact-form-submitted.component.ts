import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-form-submitted',
  standalone: true,
  imports: [FooterComponent, ButtonModule],
  templateUrl: './contact-form-submitted.component.html',
  styleUrl: './contact-form-submitted.component.scss'
})
export class ContactFormSubmittedComponent {

}
