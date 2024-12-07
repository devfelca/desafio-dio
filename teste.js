let heroXP = 2000;
let heroName = 'Felipe';
let defaultText = ['O Herói de nome ', ' está no nível de '];
let level;

switch (true) {
    case heroXP <= 1000:
        level = 'Ferro';
        break;
    case heroXP <= 2000:
        level = 'Bronze';
        break;
    case heroXP <= 3000:
        level = 'Prata';
        break;
    case heroXP <= 4000:
        level = 'Ouro';
        break;
    case heroXP <= 5000:
        level = 'Platina';
        break;
    default:
        level = 'Radiante';
}

console.log(defaultText[0] + heroName + defaultText[1] + level  )