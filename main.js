
const listMonths = document.querySelector('.list-month');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

const list = [
	{
		date: '15-08-2023',
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
		text: 'Quod cupiditate ipsam vero et eius sed, at id ut animi velit delectus deleniti eos maxime repellat nobis assumenda corporis quidem amet',
		quote: '(Lc 1,39 - 56)',
	},
];

let currentDate = new Date();

function loadListMonths(date) {
	var month = date.getMonth();
	var year = date.getFullYear();

	var offset = 3;

	listMonths.innerHTML = '';
	// store the original year
	var originalYear = year;

	for (var i = -offset; i <= offset; i++) {
		var monthIndex = month + i;

		// reset the year to the original year
		year = originalYear;

		if (monthIndex < 0) {
			monthIndex += 12;
			year--;
		}

		if (monthIndex > 11) {
			monthIndex -= 12;
			year++;
		}

		var monthBtn = document.createElement('button');
		monthBtn.className = 'btn btn-info month-item';
		if (monthIndex === month) {
			let day = 1;
			var today = new Date();

			if (month === today.getMonth()) day = today.getDate();

			monthBtn.setAttribute('data-date', new Date(year, monthIndex));

			monthBtn.innerHTML = `Tháng ${monthIndex + 1}<br>${year}`;
		} else {
			monthBtn.setAttribute('data-date', new Date(year, monthIndex));

			monthBtn.innerHTML = `Tháng ${monthIndex + 1}`;
		}

		monthBtn.addEventListener('click', function () {
			let dataDate = this.getAttribute('data-date');
			console.log(dataDate);
			loadListMonths(new Date(dataDate));
		});

		listMonths.appendChild(monthBtn);
	}
}

prevButton.addEventListener('click', function () {
	let month = currentDate.getMonth() - 1;
	if (month === 1) {
		month = 12;
		let year = currentDate.getFullYear() - 1;
		currentDate.setFullYear(year);
	}
	currentDate.setMonth(month);
	loadListMonths(currentDate);
});
nextButton.addEventListener('click', function () {
	let month = currentDate.getMonth() + 1;
	if (month > 11) {
		month = 0;
		let year = currentDate.getFullYear() + 1;
		currentDate.setFullYear(year);
	}
	currentDate.setMonth(month);
	loadListMonths(currentDate);
});

loadListMonths(currentDate);
