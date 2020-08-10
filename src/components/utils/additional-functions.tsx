export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};


export const splitTheNumber = (number: number) => {
  return String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')
}

export const addNumberDescriptionForPopulation = (number: number) => {
  if (number >= 1000 && number < 1000000) {
    return `${splitTheNumber(number)} thousand`
  }
  if (number >= 1000000 && number < 1000000000) {
    return `${splitTheNumber(number)} million`
  }
  if (number >= 1000000000) {
    return `${splitTheNumber(number)} billion`
  }
  return splitTheNumber(number);
};