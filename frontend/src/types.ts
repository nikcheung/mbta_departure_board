interface BaseApiObject {
  id: number;
  type: string;
  relationships: any;
}

export interface Stop extends BaseApiObject {
  attributes: {
    name: string;
  }
  relationships: any;
  links: any;
}

// an Schedule is an arrival and then a departure :(
export interface Schedule extends BaseApiObject {
  attributes: {
    arrival_time: string;
    departure_time: string;
    direction_id: number;
  }
  relationships: {
    route: {
      data: BaseApiObject;
    }
    trip: {
      data: BaseApiObject;
    }
    prediction: {
      data: BaseApiObject;
    }
  }
}

export interface Route extends BaseApiObject {
  attributes: {
    direction_destinations: string[];
    direction_names: string[];
  }
}

export interface Vehicle extends BaseApiObject {
  attributes: {
    label: number;
    occupancy_status: string;
  }
  relationships: {
    trip: {
      data: BaseApiObject;
    }
  }
}

export interface Prediction extends BaseApiObject {
  attributes: {
    departure_time: string;
    arrival_time: string;
  }
  relationships: {
    trip: {
      data: BaseApiObject;
    }
  }
}
