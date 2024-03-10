import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [
    FooterComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private messageService: MessageService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get formControls() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const formData: any = new FormData();
    formData.append('access_key', '1bbbc64d-1832-4342-bcba-61a211203eb2');
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('message', this.form.value.message);

    this.http.post('https://api.web3forms.com/submit', formData).subscribe({
      next: response => console.log(response),
      error: error => {
        console.error(error)
        this.messageService.add({
          severity: 'error',
          summary: 'An error occurred',
          detail: error.error.message,
          life: 10000,
          closable: true,
        })
      },
      complete: ()=> this.router.navigate(['contact-form-submitted'])
    });
  }
}
