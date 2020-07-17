import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterCodeService {


  constructor(private db: AngularFirestore) {
    const things = db.collection('mail').valueChanges();
  }
  createKey(email: string) {
    let key = "";
    for (let i = 0; i < email.length / 2; i++) {
      key = key + email.charCodeAt(i).toString();
    }
    return key;
  }

  createDataMail(email: string, text: string) {
    const key = this.createKey(email);
    const data = {
      to: ['stolle.finn@googlemail.com'],
      message: {
        subject: "New Code Regequest for " + email,
        text: 'This is the plaintext section of the email body.',
        html: text + "this is your key: " + key,
      }
    }

    this.sendMail(data);
  }
  private sendMail(data) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("mail")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }
}
