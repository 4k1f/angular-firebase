import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-main-update',
  templateUrl: './main-update.component.html',
  styleUrls: ['./main-update.component.css']
})
export class MainUpdateComponent implements OnInit {
  public formBuilder!:FormBuilder
  UyeKayit: any;
  constructor() { }

  ngOnInit(): void {
  }
  formOlustur(){
    return this.formBuilder.group({
      ad:[this.UyeKayit.ad],
      adres:[this.UyeKayit.adres],
      email:[this.UyeKayit.email],
      password:[this.UyeKayit.password]

    })
  }
}
