
class Tour {
  constructor(lengthOfStay, meal, location, typeOfTransport) {
    this.lengthOfStay = lengthOfStay;
    this.meal = meal;
    this.location = location;
    this.typeOfTransport = typeOfTransport; 
  }

  setLengthOfStay(lengthOfStay) {
    this.lengthOfStay = lengthOfStay;
  }

  setMeal(meal) {
    this.meal = meal;
  }

  setTypeOfTransport(typeOfTransport) {
    this.typeOfTransport = typeOfTransport;
  }
  
  setLocation(location) {
    this.location = location;
  }


  getLengthOfStay() {
    return this.lengthOfStay;
  }

  getMeal() {
    return this.meal;
  }

  getTypeOfTransport() {
    return this.typeOfTransport;
  }

  getLocation() {
    return this.location;
  }

}

class TreatmentTour extends Tour {
  constructor(resort) {
    super();
    this.resort = resort;
  }

  setResort(resort) {
    this.resort = resort;
  }

  getResort() {
    return this.resort;
  }
}


class ShoppingTour extends Tour {
  constructor(typeOfShopping) {
    super();
    this.typeOfShopping = typeOfShopping;
  }

  setTypeOfShopping(typeOfShopping) {
    this.typeOfShopping = typeOfShopping;
  }

  getTypeOfShopping() {
    return this.typeOfShopping;
  }
}

class CulturalTour extends Tour {
  constructor(typeOfCultureTour ) {
    super();
    this.typeOfCultureTour = typeOfCultureTour ;
  }

  setTypeOfCultureTour(typeOfCultureTour) {
    this.typeOfCultureTour = typeOfCultureTour;
  }

  getTypeOfCultureTour() {
    return this.typeOfCultureTour;
  }
}

class CruiseTour extends Tour {
  constructor(typeOfCruise) {
    super();
    this.typeOfCruise = typeOfCruise;
  }

  setTypeOfCruise(typeOfCruise) {
    this.typeOfCruise = typeOfCruise;
  }

  getTypeOfCruise() {
    return this.typeOfCruise;
  }
}

class RecreationTour extends Tour {
  constructor(typeOfRecreation) {
    super();
    this.typeOfRecreation = typeOfRecreation;
  }

  setTypeOfRecreation(typeOfRecreation) {
    this.typeOfRecreation = typeOfRecreation;
  }

  getTypeOfRecreation() {
    return this.typeOfRecreation;
  }
}



class TourFactory { 
  
    createTour(tourName) {  
      if (tourName === 'Treatment') {  
        return new TreatmentTour();  
      }  
      if (tourName === 'Shopping Tour') {  
        return new ShoppingTour();
      }  
      if (tourName === 'Cultural Tour') {  
        return new CulturalTour();  
      }  
      if (tourName === 'Cruise') {  
        return new CruiseTour();  
      }  
      if (tourName === 'Vacation') {  
        return new RecreationTour();  
      }  
    }
  }

    module.exports = TourFactory;


