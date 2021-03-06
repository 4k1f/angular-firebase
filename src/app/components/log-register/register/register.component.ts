import { FsapiService } from 'src/app/services/fsapi.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import 'firebase/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  UyeAdi!: "";
  KayitTarihi!:"";
  UyeDeneyimi!:"";
  UyeRolu!:"";
  UyeTuru!:"";
  UyeYetki!:"";
  email="";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: FsapiService, private router:Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  register()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.UyeAdi,this.KayitTarihi,this.UyeDeneyimi,this.UyeRolu,this.UyeTuru,this.UyeYetki,this.email, this.password)) {
      this.authservice.registerWithEmail(this.UyeAdi,this.KayitTarihi,this.UyeDeneyimi,this.UyeRolu,this.UyeTuru,this.UyeYetki,this.email, this.password)
        .then(() => {
          this.message = "Kayıt İşlemi Başarılı"

        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }

  }


  validateForm(UyeAdi,UyeDeneyimi,UyeRolu,KayitTarihi,UyeTuru,UyeYetki,email, password)
  {
    if(email.lenght === 0)
    {
      this.errorMessage = "Lütfen e-mail Giriniz";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "Lütfen şifre Giriniz";
      return false;
    }

    if (password.lenght < 6)
    {
      this.errorMessage = "Parola 6 Karakterden uzun olmalı";
      return false;
    }

    this.errorMessage = '';
    return true;

  }





}
