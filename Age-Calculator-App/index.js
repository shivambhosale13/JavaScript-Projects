let calculateButton = document.querySelector('.js-calculate-button')

let date = '';

calculateButton.addEventListener('click', () => {
    date = document.querySelector('.js-date').value;
    calculateAge(date);
});


function calculateAge(date) {
    const birthday = dayjs(date);
    const today = dayjs();

    const years = today.diff(birthday, 'year');
    const afterYears = birthday.add(years, 'year');

    const months = today.diff(afterYears, 'month');
    const afterMonths = afterYears.add(months, 'month');

    const days = today.diff(afterMonths, 'day');

   document.querySelector('.js-display-age')
   .innerText = `You are ${years} years, ${months} months and ${days} days old`
}