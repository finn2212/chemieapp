import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { UserData } from '../models/userData'
import { async } from 'rxjs/internal/scheduler/async';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData;
  currentMail: string;
  collectionName = '';
  userid;


  constructor(
    private db: AngularFirestore,
    private localDb: Storage,
   ) { 
        
      
    }

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
    //this.storeUserInfo(data);
   // this.storeUserInfoLocal(userData);
    return data;
  }
  async getUserInfoAsync() {
    return await this.localDb.get('userdata');
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


  async setcurrentMail(email: string) {
    this.userData = await this.getUserInfoAsync();
    this.currentMail = email;
  }

  getcurrentMail() {
    return this.currentMail;
  }
  getUserData() {
    return this.userData;
  }


 
//todo rechange with email 
  create_user(record) {
    return this.db.collection(record.Email).add(record);
  }
  
  read_user() {
    return this.db.collection(this.currentMail).snapshotChanges();
  }

  update_user(recordID, record) {
    this.db.doc(this.currentMail + '/' + recordID).update(record);
  }

  delete_user(record_id) {
    this.db.doc(this.currentMail + '/' + record_id).delete();
  }

}
