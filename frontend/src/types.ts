export interface Stop {
  id: number;
  attributes: {
    name: string;
  }
  relationships: any;
  links: any;
}

// an Appearance is an arrival and then a departure :(
export interface Appearance {
  id: number;
  attributes: {
    arrival_time: string;
    departure_time: string;
    direction_id: number;
  }
}

