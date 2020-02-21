const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') return false;
  const sampleActivityNum = parseFloat(sampleActivity);
  if(isNaN(sampleActivityNum || sampleActivityNum <= 0 || sampleActivityNum > MODERN_ACTIVITY)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / (0.693 / HALF_LIFE_PERIOD));
};
