console.log("UberPrice")

class UberPrice{
     constructor(Kms,Type,AC,perKm = 13){
        this.distance = Kms;
        this.vehicle = Type;
        this.Used = AC;
        this.rs = perKm;

     }
     getDistance(){
        return this.distance
     }
   
     getVehicleType(){
        return this.vehicle
     }
     
     getPrice(){
       if(this.vehicle === "XUV"){
           let rs =  this.rs+4;
        if(this.Used === "Non Ac"){
            return this.distance*rs
         } else {
            rs = this.rs+7;
            return this.distance*rs;
         }
       } else if(this.vehicle === "SUV"){
         if(this.Used === "Non Ac"){
            return this.distance*this.rs
         } else {
            this.rs+4;
            return this.distance*this.rs;
         }
       }
    }
  
     toString() {
        return `Your Travelling Distance is ${this.distance} Kms in ${this.vehicle} the total cost of the travel is Rs ${this.getPrice()}`;
    }
    
}

const Per1 = new UberPrice(270,"XUV","Ac");
const Per3 = new UberPrice(470,"XUV","Non Ac");
const Per2 = new UberPrice(389,"SUV","Non Ac")
console.log(Per1.toString())
console.log(Per2.toString())
console.log(Per3.toString())