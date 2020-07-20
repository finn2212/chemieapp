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

  createDataMail(data: any) {
    console.log(data);
    const key = this.createKey(data.email);
    const mailData = {
      to: ['stolle.finn@googlemail.com'],
      message: {
        subject: "New Code Regequest for " + data.email,
        text: 'This is the plaintext section of the email body.',
        html: '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user mail: ' + data.email + '</td></tr></table></body>' +
          '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user name: ' + data.name + '</td></tr></table></body>' +
          '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user company: ' + data.company + '</td></tr></table></body>' +
          '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user adress: ' + data.adress + '</td></tr></table></body>' +
          '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user telephone: ' + data.telephone + '</td></tr></table></body>' +
          '<body style="margin: 0; padding: 0;"><table border="1" cellpadding="0" cellspacing="0" width="100%"><tr> <td>this is user key: ' + key + '</td></tr></table></body>'

      }
    }

    this.sendMail(mailData);
  }
  private sendMail(mailData) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("mail")
        .add(mailData)
        .then(res => { }, err => reject(err));
    });
  }
}
