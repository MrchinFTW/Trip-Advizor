import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeComp = () => {
	// date state
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	]);
	let days = range[0].endDate.getTime() - range[0].startDate.getTime();
	days = Math.round(days / (24 * 60 * 60 * 1000) + 1);

	// open close
	const [open, setOpen] = useState(false);

	// get the target element to toggle
	const refOne = useRef(null);

	useEffect(() => {
		// event listeners
		document.addEventListener('keydown', hideOnEscape, true);
		document.addEventListener('click', hideOnClickOutside, true);
	}, []);

	// hide dropdown on ESC press
	const hideOnEscape = (e) => {
		if (e.key === 'Escape') {
			setOpen(false);
		}
	};

	// Hide on outside click
	const hideOnClickOutside = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false);
		}
	};

	return (
		<div className='calendarWrap'>
			<input
				value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
					range[0].endDate,
					'dd/MM/yyyy'
				)}`}
				readOnly
				className='inputBox'
				onClick={() => setOpen((open) => !open)}
			/>
			<div ref={refOne}>
				{open && (
					<DateRange
						onChange={(item) => setRange([item.selection])}
						editableDateInputs={true}
						moveRangeOnFirstSelection={false}
						ranges={range}
						months={1}
						direction='horizontal'
						className='calendarElement'
					/>
				)}
			</div>
		</div>
	);
};

export default DateRangeComp;
