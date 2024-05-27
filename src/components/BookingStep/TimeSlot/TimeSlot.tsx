import './TimeSlot.css';
import slots from './data';

const TimeSlot = () => {
    const morningSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) < 12;
    });

    const afternoonSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) >= 12;
    });

    return (
        <div className='time-slots-container'>
            <div className="morning-time-slots-container">
                <div>Buổi sáng</div>
                <div className="morning-time-slots">
                    {morningSlots.map((time, index) => (
                        <div key={index} className='time-slot'>
                            {time}
                        </div>
                    ))}
                </div>
            </div>
            <div className='evening-time-slots-container'>
                <div>Buổi chiều</div>
                <div className="evening-time-slots">
                    {afternoonSlots.map((time, index) => (
                        <div key={index} className='time-slot'>
                            {time}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TimeSlot