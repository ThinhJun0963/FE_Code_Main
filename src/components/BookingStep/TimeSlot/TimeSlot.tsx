import './TimeSlot.css';
import slots from './data';

const TimeSlot = () => {
    return (
        <div className='time-slots-container'>
            {slots.map((time, index) => (
                <div key={index} className='time-slot'>
                    {time}
                </div>
            ))}
        </div>
    )
}

export default TimeSlot