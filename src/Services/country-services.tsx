export default class CountryServices {
  _apiAllCountries: string = 'https://restcountries.eu/rest/v2/all';
  _apiCountryByName: string = 'https://restcountries.eu/rest/v2/name' // https://restcountries.eu/rest/v2/name/{name}

  getDataServices = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error services ${this._apiAllCountries} country-services. ${response.status}`);
    if (response.ok) return await response.json();
  };

  getAllCountries = async () => {
    const countries = await this.getDataServices(this._apiAllCountries);
    return countries.map(this._transfotmDataCountries);
  };

  getCountryByName = async (name: string) => {
    const country = await this.getDataServices(`${this._apiCountryByName}/${name}`);
    return country.map(this._transfotmDataCountries)[0];
  };

  _transfotmDataCountries = (country: any) => {
    return {
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      giniCoefficient: country.gini,
      flag: country.flag,
      region: country.region,
      code2Symbol: country.alpha2Code,
      code3Symbol: country.alpha3Code,
      borders: country.borders,
      capital: country.capital,
      area: country.area,
      languages: [country.name, country.nativeName],
      currencies: country.currencies[0],
      currencyName: country.currencies[0].name,
      currencySymbol: country.currencies[0].symbol
    }
  };
}