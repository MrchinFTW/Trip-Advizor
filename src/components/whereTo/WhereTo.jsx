import '../../App.css';
import DateRangeComp from './DateRangeComp';

const WhereTo = () => {
	return (
		<div className='whereTo'>
			<h1>where do you want to go?</h1>
			<input type='text' />
			<DateRangeComp />
		</div>
	);
};

export default WhereTo;
