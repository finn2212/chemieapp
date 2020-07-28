export class UserData {
  email: string;
  name: string;
  company: string;
  country: string;
  adress: string;
  telephone: number;
  contactPerson: string;
  artOfWorking: string;


  constructor(email: string, name: string, company: string, country: string, adress: string, telephone: number, contactPerson: string, artOfWorking: string) {
    this.email = email,
      this.name = name,
      this.company = company,
      this.country = country,
      this.adress = adress,
      this.telephone = telephone,
      this.contactPerson = contactPerson,
      this.artOfWorking = artOfWorking

  }
}

