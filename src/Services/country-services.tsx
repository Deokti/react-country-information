export default class CountryServices {
  _apiAllCountries: string = 'https://restcountries.eu/rest/v2/all';
  _apiCountryByName: string = 'https://restcountries.eu/rest/v2/name';

  getDataServices = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error services ${this._apiAllCountries} country-services. ${response.status}`);
    if (response.ok) return await response.json();
  };

  getAllCountries = async (): Promise<any> => {
    const countries = await this.getDataServices(this._apiAllCountries);
    return countries.map(this._transfotmDataCountries);
  };

  getCountryByName = async (name: string): Promise<any> => {
    const country = await this.getDataServices(`${this._apiCountryByName}/${name}`);
    return country.map(this._transfotmDataCountries)[0];
  };

  _transfotmDataCountries = (country: any): object => {
    return {
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      giniCoefficient: country.gini,
      flag: country.flag,
      region: country.region,
      code2Symbol: country.alpha2Code,
      code3Symbol: country.alpha3Code,
      capital: country.capital,
      area: country.area,
      currencyName: country.currencies[0].name,
      currencySymbol: country.currencies[0].symbol,
      subregion: country.subregion,
    }
  };
}
