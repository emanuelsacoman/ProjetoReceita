import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'nomedoprojeto | Login';
  description = 'Página de Login.';

  loginForm!: FormGroup;
  loginError: string | null = null;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private titleService: Title,
    private metaService: Meta){
      this.setDocTitle(this.title)
      this.setMetaDescription(this.description);
  }

  submit(){
    
  }

  //

  isInvalidControl(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }

  setMetaDescription(description: string) {
    console.log('Updating meta description:::::', description);
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
