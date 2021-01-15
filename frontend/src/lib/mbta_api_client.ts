import { Schedule } from "../types";

export class MbtaApiClient {
  static BASE_URL = `https://api-v3.mbta.com`;

  static fetchStops(limit: number, offset: number, callback: (value: any) => any) {
    this.fetchEndpoint(
      `${this.BASE_URL}/stops?page[limit]=${limit}&page[offset]=${offset}`,
      callback
    );
  }

  static fetchSchedules(stopId: number, callback: (value: any) => any) {
    const wrappedCallback = (schedules: Schedule[]) => {
      const currentDate = new Date()
      const transformed = schedules.map(schedule => {
        schedule.attributes.departure_time = new Date(schedule.attributes.departure_time);
        return schedule;
      })
      const filtered = transformed.filter(schedule => schedule.attributes.departure_time > currentDate);
      const sorted = filtered.sort((a: Schedule, b: Schedule) => {
        return a.attributes.departure_time.getTime() - b.attributes.departure_time.getTime()
      })
      return callback(sorted);
    }
    this.fetchEndpoint(`${this.BASE_URL}/schedules?filter[stop]=${stopId}`, wrappedCallback);
  }

  static fetchRoutes(stopId: number, callback: (value: any) => any) {
    this.fetchEndpoint(`${this.BASE_URL}/routes?filter[stop]=${stopId}`, callback);
  }

  static fetchVehicles(routeIds: number[], callback: (value: any) => any) {
    this.fetchEndpoint(`${this.BASE_URL}/vehicles?filter[route]=${routeIds.join(",")}`, callback);
  }

  static fetchPredictions(stopId: number, callback: (value: any) => any) {
    this.fetchEndpoint(`${this.BASE_URL}/predictions?filter[stop]=${stopId}`, callback);
  }

  static fetchEndpoint(endpoint: string, callback: (value: any) => any) {
    // to use the api key, i would have to make an endpoint to make this request from the server,
    //   instead of the client. it isn't safe to have our api key available to the front end, sadly.
    fetch(endpoint).then(response => {
      if (response.status == 200) {
        response.json().then((json) => callback(json.data));
      }
      else {
        console.log(`status: ${response.status}, body: ${response.body}`);
      }
    }).catch(err => console.log(`Fetch error`, err));
  }
}