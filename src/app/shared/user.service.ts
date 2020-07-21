import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  createUserInfo(email: string, name: string, company: string, country: string, adress: string, telephone: number, contactPerson: string, artOfWorking: string) {
    const data = {
      email: email,
      name: name,
      company: company,
      country: country,
      adress: adress,
      telephone: telephone,
      contactPerson: contactPerson,
      artOfWorking: artOfWorking
    }
    this.storeUserInfo(data);
    return data;
  }

  private storeUserInfo(data) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("user")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }
  getUsers() {
    return this.db.collection("user").snapshotChanges();
  }

}
