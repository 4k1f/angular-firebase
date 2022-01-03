import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

import { Uye } from '../models/Uye';
@Injectable({
  providedIn: 'root'
})
export class FsapiService {
 formData!: Uye;
 authState: any = null;
 isAuthenticated = false;

  constructor(
    private afs:AngularFirestore,
    private afu: AngularFireAuth,
    private router: Router
  ) {
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }
  //region uyeler

  uyeleriGetir(){
    return this.afs.collection('uyeler').snapshotChanges()
  }
  uyeEkle(uye:Uye){
    delete uye.UyeId
   return this.afs.collection('uyeler').add(uye)


  }
  uyeDuzenle(uye:Uye){
    return this.afs.collection('uyeler').doc(uye.UyeId).update(uye )
  }
  uyeSil(UyeId){
    return this.afs.collection('uyeler').doc(UyeId).delete()
  }
  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      this.isAuthenticated = true;
      this.router.navigate(['main']);

      return true
    } else {
      return false
    }
  }

registerWithEmail(ad:string,tarih:string,deneyim:string,rol:string,tur:string,yetki:string,email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        return this.afs.collection('uyeler').doc().set({
          UyeAdi:ad,
          KayitTarihi:tarih,
          UyeDeneyimi:deneyim,
          UyeRolu:rol,
          UyeTuru:tur,
          UyeYetki:yetki,
          UyeEmail:email

      });

    }).then((user)=>{
        this.authState = user
      }).catch(error => {
        console.log(error)
        throw error
      });



  }



  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.isAuthenticated = true;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  singout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/']);
  }


  //uyeler end
}
function uid(uid: any) {
  throw new Error('Function not implemented.');
}

