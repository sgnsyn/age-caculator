const MILISECONDS_IN_YEAR = 31536000000;
const MILISECONDS_IN_MONTH = 2592000000;
const MILISECONDS_IN_DAY = 86400000;
const thisYear = parseInt(new Date().getFullYear());
const thisMonth = parseInt(new Date().getMonth()) + 1;
const thisDay = parseInt(new Date().getDate());

function dateToMiliseconds(day, month, year) {
  const date = `${year}-${month}-${day}`;
  return new Date() - new Date(date);
}

function milisecondsToDate(miliseconds) {
  let yy = parseInt(miliseconds / MILISECONDS_IN_YEAR);
  miliseconds %= MILISECONDS_IN_YEAR;
  let mm = parseInt(miliseconds / MILISECONDS_IN_MONTH);
  miliseconds %= MILISECONDS_IN_MONTH;
  let dd = parseInt(miliseconds / MILISECONDS_IN_DAY);
  dd = dd < 10 ? `0${dd}` : `${dd}`;
  mm = mm < 10 ? `0${mm}` : `${mm}`;
  yy = yy < 10 ? `0${yy}` : `${yy}`;
  return { yy, mm, dd, miliseconds };
}
