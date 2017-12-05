let healthGoku = 100;
let healthSuperMan = 100;

const MIN_POWER = 1;
const MAX_POWER = 10;

const bothIsAlive = () => healthGoku > 0 && healthSuperMan > 0;
const gokuIsAlive = () => healthGoku > 0;
const getHit = () => Math.round( Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

let round = 0;

while(bothIsAlive()){

    round++;
    console.log(`Round ${round}`);

    const hitGoku = getHit();
    const hitSuperMan = getHit();

    if(hitGoku > hitSuperMan){
        console.log(`Goku ataca a Superman con un golpe de ${hitGoku}.`);
        healthSuperMan -= hitGoku;
        console.log(`Superman queda con ${healthSuperMan} de vida.`);
    }
    else{
        console.log(`Superman ataca a Goku con un golpe de ${hitSuperMan}.`);
        healthGoku -= hitSuperMan;
        console.log(`Goku queda con ${healthGoku} de vida.`);
    }
}

if(gokuIsAlive()){
    console.log(`Goku gano la pelea.`);
}
else{
    console.log(`Superman gano la pelea.`);
}