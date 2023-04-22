const error1 = () => `This field is required`;
const error2 = (val) => `Must be a vaild ${val}`;
const error3 = () => `Must be in the past`;
const returnOnError = (error, val) => {
  if (error) return val;
};

function validator(day, month, year) {
  const error_message = {
    day: "",
    month: "",
    year: "",
    yearErr: false,
    monthErr: false,
    dayErr: false,
  };
  let error = false;

  // empty field check
  {
    if (day === "") {
      error_message.day = error1();
      error_message.dayErr = true;
      error = true;
    }
    if (month === "") {
      error_message.month = error1();
      error_message.monthErr = true;
      error = true;
    }
    if (year === "") {
      error_message.year = error1();
      error_message.yearErr = true;
      error = true;
    }
  }
  returnOnError(error, { day, month, year, error, error_message });

  // Outof bound  check

  [day, month, year] = [day, month, year].map((val) => parseInt(val));

  {
    if (day < 1 || day > 31) {
      error_message.day = error2("day");
      error_message.dayErr = true;
      error = true;
    }
    if (month < 1 || month > 12) {
      error_message.month = error2("month");
      error_message.monthErr = true;
      error = true;
    }
    if (year > thisYear) {
      error_message.year = error3();
      error_message.yearErr = true;
      error = true;
    }
  }

  returnOnError(error, { day, month, year, error, error_message });
  //date Validty check

  {
    if ([4, 6, 9, 11].includes(month) && day > 30) {
      error_message.day = error2("date");
      error_message.dayErr = true;
      error = true;
    }

    if (month === 2 && day > 28) {
      error_message.day = error2("date");
      error_message.dayErr = true;
      error = true;
    }
  }
  returnOnError(error, { day, month, year, error, error_message });

  //return date

  return { day, month, year, error, error_message };
}
