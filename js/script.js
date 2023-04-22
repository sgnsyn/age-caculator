const {
  dayIn,
  monthIn,
  yearIn,
  dayOut,
  monthOut,
  yearOut,
  dayErr,
  monthErr,
  yearErr,
  form,
  sumbmit,
  app,
  dayWrapper,
  monthWrapper,
  yearWrapper,
} = dom;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dayWrapper.dataset.error = "no";
  monthWrapper.dataset.error = "no";
  yearWrapper.dataset.error = "no";
  dayErr.innerHTML = "&nbsp;";
  monthErr.innerHTML = "&nbsp; ";
  yearErr.innerHTML = " &nbsp;";

  let { day, month, year, error, error_message } = validator(
    dayIn.value,
    monthIn.value,
    yearIn.value
  );

  if (error) {
    if (error_message.dayErr) dayWrapper.dataset.error = "yes";
    if (error_message.monthErr) monthWrapper.dataset.error = "yes";
    if (error_message.yearErr) yearWrapper.dataset.error = "yes";
    dayOut.textContent = "__";
    monthOut.textContent = "__";
    yearOut.textContent = "__";

    dayErr.textContent = error_message.day;
    monthErr.textContent = error_message.month;
    yearErr.textContent = error_message.year;
    return;
  }
  const { dd, mm, yy } = milisecondsToDate(dateToMiliseconds(day, month, year));
  outputAnimator(dd, 1, dayOut);
  outputAnimator(mm, 1, monthOut);
  outputAnimator(yy, 1, yearOut);
});
