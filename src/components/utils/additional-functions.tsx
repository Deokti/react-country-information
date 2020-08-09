export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const addNumberDescriptionForPopulation = (number: number) => {
  if (number >= 1000 && number < 1000000) {
    return `${String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')} thousand`
  }
  if (number >= 1000000 && number < 1000000000) {
    return `${String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')} million`
  }
  if (number >= 1000000000) {
    return `${String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')} billion`
  }
  return String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
};