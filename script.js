class Person{
    constructor(name="M.salah",age = 29,profession = "Football player",city = "Egypt",currentteam = "LiverpoolFc",jerseyno = 10){
         this.name = name;
         this.age = age;
         this.profession = profession;
         this.city = city;
         this.currentteam = currentteam;
         this.jerseyno = jerseyno
    }
    getPerson() {
          return this;
    }
}

const personDetails = new Person();
console.log(personDetails.getPerson())




