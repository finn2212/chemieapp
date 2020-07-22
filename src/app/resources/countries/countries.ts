export default class CountriesData {
  countriesList: any[] = [
    {
      id: 1,
      name: 'Germany'
    },
    {
      id: 2,
      name: 'Denmark'
    },
    {
      id: 3,
      name: 'Portugal'
    },
    {
      id: 3,
      name: 'Polen'
    },
    {
      id: 3,
      name: 'Östereich'
    }
  ];

  public getcountriesData() {
    return this.countriesList
  }
}