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
    }
  ];

  public getcountriesData() {
    return this.countriesList
  }
}