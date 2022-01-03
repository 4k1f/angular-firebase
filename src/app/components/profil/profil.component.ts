import { FsapiService } from 'src/app/services/fsapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(public authservice: FsapiService, private router: Router) { }

  ngOnInit(): void {
  }

}
