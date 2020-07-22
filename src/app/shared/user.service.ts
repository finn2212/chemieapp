import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }
  currentMail: string;

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
        .collection(data.email)
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getUserInformation(): AngularFirestoreCollection<any> {
    return this.db.collection(this.getcurrentMail());
  }

  setcurrentMail(email: string) {
    this.currentMail = email;
  }

  getcurrentMail() {
    return this.currentMail;;
  }


}
