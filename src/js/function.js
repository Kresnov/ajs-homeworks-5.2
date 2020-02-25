import hero from './hero.js';

export default function specialCard(object) {
  const specialAttacks = [];
  object.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    const attack = {
      id, name, icon, description,
    };
    specialAttacks.push(attack);
  });
  return specialAttacks;
}

specialCard(hero);
