class Plane {
  public inTheAir!: boolean;
  public id!: string;
  public airport!: Airport;

  constructor(id: string, airport: any) {
    this.inTheAir = false;
    this.id = id;
    this.airport = airport;
  }

  take_off() {
    this.airport.depart(this);
  }

  land() {
    this.airport.land(this);
  }
}

class Runway {
  private available!: boolean;

  constructor() {
    this.available = true;
  }

  setAvailable(status: boolean): void {
    this.available = status;
  }

  isAvailable(): boolean {
    return this.available;
  }
}


class PlanesOnTheGround{
  private planes!: Plane[];
  constructor() {
    this.planes = []
  }

  addPlane(plane: Plane): void{
    this.planes.push(plane)
  }

  removePlane(plane: Plane): void{
    this.planes = this.planes.filter(elem => elem.id !== plane.id);
  }
}

class PlanesInTheAir{
  private planes!: Plane[];
  constructor() {
    this.planes = []
  }

  addPlane(plane: Plane): void{
    this.planes.push(plane)
  }

  removePlane(plane: Plane): void{
    this.planes = this.planes.filter(elem => elem.id !== plane.id);
  }
}

abstract class Mediator{
  abstract land(plane: Plane): void
  abstract depart(plane: Plane): void
}

class Airport implements Mediator{
  private runway!: Runway;
  private grounded!: PlanesOnTheGround;
  private airborne!: PlanesInTheAir;
  constructor(runway: Runway, grounded: PlanesOnTheGround, airborne: PlanesInTheAir) {
    this.runway = runway
    this.grounded = grounded
    this.airborne = airborne
  }

  addGroundedPlane(plane: Plane): void{
    this.grounded.addPlane(plane);
  }

  land(plane: Plane): void {
    if (plane.inTheAir && this.runway.isAvailable()){
      console.log(`Plane ${plane.id} is landing...`)
      this.grounded.addPlane(plane)
      this.airborne.removePlane(plane)
      plane.inTheAir = false
      this.runway.setAvailable(false)
    }
  }

   depart(plane: Plane): void {
    if (!plane.inTheAir && this.runway.isAvailable()){
      console.log(`Plane ${plane.id} is departing...`)
      this.grounded.removePlane(plane)
      this.airborne.addPlane(plane)
      plane.inTheAir = true
      this.runway.setAvailable(false)
    }
  }
}

// const airport = new Airport(
//   new Runway(),
//   new PlanesOnTheGround(),
//   new PlanesInTheAir()
// );
// const plane1 = new Plane('123', airport);
// const plane2 = new Plane('234', airport);
// const plane3 = new Plane('444', airport);
// airport.add_grounded_plane(plane1);
// airport.add_grounded_plane(plane2);
// airport.add_grounded_plane(plane3);
// plane1.take_off();
// plane2.take_off();
// plane1.land();
