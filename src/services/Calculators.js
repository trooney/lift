function calculateBMI(height, weight) {
  weight = parseInt(weight, 10);
  height = parseInt(height, 10);

  let bmi = weight / Math.pow(height / 100, 2); 
  
  if (!bmi || bmi === Infinity) {
    return 0
  }

  return parseFloat(bmi.toFixed(1));
}

function calculateOneRM(reps, weight) {
  reps = parseInt(reps, 10);
  weight = parseInt(weight, 10);

  if (!reps || !weight) {
    return 0
  }

  let oneRm = weight * (36 / (37 - reps));
  return parseInt(oneRm.toFixed(0), 10);
}

// @see http://www.livestrong.com/article/343028-how-to-calculate-vo2-max-from-running/
function calculateVo2Max(
  age,
  height,
  weight,
  gender,
  minutes,
  seconds
) {

  age = parseInt(age, 10)
  height = parseInt(height, 10)
  weight = parseInt(weight, 10)
  gender = (gender || 'M').toUpperCase() === 'M' ? 1 : 0
  minutes = parseInt(minutes, 10)
  seconds = parseInt(seconds, 10)

  const bmi = calculateBMI(height, weight)
  const timeInHundredths = minutes + (seconds / 60)

  const a = 0.21 * (24 * gender)
  const b = 0.84 * bmi;
  const c = 8.41 * timeInHundredths
  const d = 0.34 * (timeInHundredths * timeInHundredths)
  const e = 108.94

  return parseFloat((a - b - c + d + e).toFixed(2));
}

exports.calculateBMI = calculateBMI
exports.calculateOneRM = calculateOneRM
exports.calculateVo2Max = calculateVo2Max