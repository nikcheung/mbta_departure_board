export class MbtaApiClient {
  static BASE_URL = `https://api-v3.mbta.com`;

  static fetchSchedules(stopId: number, callback: (value: any) => any) {
    this.fetchEndpoint(`${this.BASE_URL}/schedules?filter[stop]=${stopId}`, callback);
  }

  static fetchStops(limit: number, offset: number, callback: (value: any) => any) {
    this.fetchEndpoint(
      `${this.BASE_URL}/stops?page[${limit}]=10&page[offset]=${offset}`,
      callback
    );
  }

  static fetchEndpoint(endpoint: string, callback: (value: any) => any) {
    // to use the api key, i would have to make an endpoint to make this request from the server,
    //   instead of the client. it isn't safe to have our api key available to the front end, sadly.
    fetch(endpoint).then(response => {
      if (response.status == 200) {
        response.json().then(callback);
      }
      else {
        console.log(`status: ${response.status}, body: ${response.body}`);
      }
    }).catch(err => console.log(`Fetch error`, err));
  }
}