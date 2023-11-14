
const readlineSync = require('readline-sync');


const TourFactory = require('./Tour')
const ClientBuilder = require('./Client')
const Voucher = require('./Voucher1')
 


class ReadInputParameters {
    constructor() {
        this.tourName = "";
        this.lengthOfStay = 0;
        this.meal = "";
        this.transport = "";
        this.inputValues = {};
    }
        
run() {
    console.log("Welcome to our tour booking system!");
    this.askTourName();
}
        
askTourName() {
    console.log("Please select the tour type:");
    console.log("1. Treatment");
    console.log("2. Shopping Tour");
    console.log("3. Sightseeing Tour");
    console.log("4. Cruise");
    console.log("5. Vacation");
        
const tourTypeSelection = readlineSync.question("Enter the number corresponding to your desired tour type: ");
    switch (tourTypeSelection) {
    case "1":
        this.tourName = "Treatment";
    break;
    case "2":
        this.tourName = "Shopping Tour";
    break;
    case "3":
        this.tourName = "Sightseeing Tour";
    break;
    case "4":
        this.tourName = "Cruise";
    break;
    case "5":
        this.tourName = "Vacation";
    break;
    default:
        console.log("Invalid tour type selection. Please try again.");
        this.askTourName();
    return;
}
    this.askLengthOfStay();

}
        
askLengthOfStay() {
    const lengthInput = readlineSync.question("Enter the length of the tour in days: ");
        if (isNaN(lengthInput)) {
            console.log("Invalid tour length. Please enter a valid number.");
            this.askLengthOfStay();
        } else {
            this.lengthOfStay = parseInt(lengthInput, 10);
        }

    this.askMeal();
}

askMeal() {
    console.log("Please select the meal option:");
    console.log("1. Full Board (Breakfast, Lunch, Dinner)");
    console.log("2. Half Board (Breakfast, Dinner)");
    console.log("3. Breakfast only");  
    console.log("4. All Inclusive"); 
    console.log("5. Ultra All Inclusive"); 
                            
    const meal = readlineSync.question("Enter the number corresponding to your desired meal option:")
    switch (meal) {
        case "1":
            this.meal = "Full Board";
        break;
        case "2":
            this.meal = "Half Board";
        break;
        case "3":
            this.meal = "Breakfast only";
        break;
        case "4":
            this.meal = "All inclusive";
        break;
        case "5":
            this.meal = "Ultra All inclusive";
        break;
        default:
            console.log("Invalid meal option selection. Please try again.");
            this.askMeal ();
        return; 
    }
    this.askTransport();                
}

askTransport() {
    console.log("Please select the transportation option:");
    console.log("1. Flight");
    console.log("2. Train");
    console.log("3. Bus");
    console.log("4. Car");
    const transportTypeSelection = readlineSync.question("Enter the number corresponding to your desired transportation option:");

        switch (transportTypeSelection) {
          case "1":
            this.transport = "Flight";
            break;
          case "2":
            this.transport = "Train";
            break;
          case "3":
            this.transport = "Bus";
            break;
          case "4":
            this.transport = "Car";
            break;
          default:
            console.log("Invalid transportation option selection. Please try again.");
            this.askTransport();
            return; 
        }
    this.displayInputSummary ()
    
}

displayInputSummary() {
    console.log("Thank you for providing the following information:");
    console.log(`Tour Type: ${this.tourName}`);
    console.log(`Tour Length: ${this.lengthOfStay} days`);
    console.log(`Meal Option: ${this.meal}`);
    console.log(`Transportation Option: ${this.transport}`);
    const answer =	readlineSync.question("You confirm the following data? ");
if (answer === "Yes") {
    console.log("We are always happy to help you!");
    this.inputValues = this.collectParams();
} else {
    console.log("Let's try again");
    this.askTourName ();
}

};

collectParams() {
    const tourName = this.tourName;
    const lengthOfStay = this.lengthOfStay;
    const meal = this.meal;
    const transport = this.transport;
    return {tourName, lengthOfStay, meal, transport};
  }
  
}

const readInputParameters = new ReadInputParameters();
readInputParameters.run();





class TravelAgency {

    createTourConcrete() {
        const inputValues = readInputParameters.inputValues;
        const factory = new TourFactory();
        const tourConcrete = factory.createTour(inputValues.tourName)
        tourConcrete.setLengthOfStay (inputValues.lengthOfStay);  
        tourConcrete.setTypeOfTransport(inputValues.typeOfTransport);  
        tourConcrete.setLocation (inputValues.location);  
        tourConcrete.setMeal(inputValues.meal);  
        return tourConcrete;      

    }

    // createTourConcrete(tourName,lengthOfStay, meal, location, typeOfTransport) {
    //     const factory = new TourFactory();
    //     const tourConcrete = factory.createTour(tourName)
    //     tourConcrete.setLengthOfStay (lengthOfStay);  
    //     tourConcrete.setTypeOfTransport(typeOfTransport);  
    //     tourConcrete.setLocation (location,);  
    //     tourConcrete.setMeal(meal);  
    //     return tourConcrete;      

    // }
      
    createClient(name, surname, dateOfBirth, passportNumber) {
        const clientConcrete = new ClientBuilder().addName(name).addSurname(surname).addDateOfBirth(dateOfBirth).addPassportNumber(passportNumber).build();
        return clientConcrete;
    }
      
    createVoucher(tourConcrete, clientConcrete, price) {
        const vouchers = [];
        const voucher = new Voucher();
        voucher.setTourConcrete(tourConcrete);
        voucher.setClientConcrete(clientConcrete);
        voucher.setPrice(price);
        vouchers.push(voucher);
        return vouchers 
    }
    filterVouchersByPrice(arr, valueOfPrice){
        arr.filter(obj => obj.price <= valueOfPrice);
    }
    
}


function sortVouchers(arr) {
    arr.sort((a, b) => {
      const nameA = a.tourName.toUpperCase(); 
      const nameB = b.tourName.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; 
    });
  }





const clientIvan = new TravelAgency().createClient('Ivan', 'Ivanov', '1999.29.5', 'HB7893456'); 
const tourForIvan = new TravelAgency().createTourConcrete();
const voucherForIvan = new TravelAgency().createVoucher(tourForIvan, clientIvan, 1200);
console.log (voucherForIvan);

// const clientJohn = new TravelAgency().createClient('John', 'Benson', '1985.12.2', 'P12KL9835'); 
// const tourForJohn = new TravelAgency().createTourConcrete('Cruise', 14, "Ultra All Inclusive", "Netherlands, Rotterdam", 'Liner');
// const voucherForJohn = new TravelAgency().createVoucher(tourForJohn, clientJohn, 3800);
// console.log (voucherForJohn);


const filteredVouchers = TravelAgency.filterVouchersByPrice(vouchers, 3400);
console.log(`Tours were filltered according to price:`, filteredVouchers);


sortVouchers(vouchers);
console.log(vouchers);






