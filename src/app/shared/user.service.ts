import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { UserData } from '../models/userData'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore,
    private localDb: Storage) { }
  userData: UserData;
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
    let userData = new UserData(email, name, company, country, adress, telephone, contactPerson, artOfWorking);
    this.storeUserInfo(data);
    this.storeUserInfoLocal(userData);
    return data;
  }

  private storeUserInfoLocal(userData) {
    this.localDb.set('userdata', userData);

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
  private getUserInformationLocal() {
    return this.localDb.get('userdata')
  }

  private getUserInfosFromLocalDB() {
    this.getUserInformationLocal().then((result) => {
      this.userData = result;
    });
  }

  setcurrentMail(email: string) {
    this.getUserInfosFromLocalDB()
    this.currentMail = email;
  }

  getcurrentMail() {
    return this.currentMail;
  }
  getUserData() {
    return this.userData;
  }


}
