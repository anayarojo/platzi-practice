const starWars7 = "Star Wars: El Despertar de la Fuerza";
const pgStarWars7 = 13;

const nameElliot = "Elliot Alderson";
let ageElliot = 24;

const nameDarlene = "Darlene Alderson";
let ageDarlene = 12;

const nameAngela = "Angela Moss";
let ageAngela = 11;

const canWatchStarWars = (name, age, isWithAdult = false) => {
  if (age >= 13) {
    alert(`${name} puede pasar a ver ${starWars7}.`);
  } else if (isWithAdult) {
    alert(
      `${name} puede pasar a ver ${
        starWars7
      } porque está acompañada/o por un adulto.`
    );
  } else {
    alert(
      `${name} no puede pasar a ver ${starWars7} porque tiene ${
        age
      } y debe tener ${pgStarWars7}.`
    );
  }
};

canWatchStarWars(nameElliot, ageElliot);
canWatchStarWars(nameDarlene, ageDarlene, true);
canWatchStarWars(nameAngela, ageAngela);
