import ReactCalendar from 'react-calendar';

const Calendar = () => {
    return (
        <div className="calendar-container">
            <ReactCalendar minDate={new Date()}
                className="react-calendar"
                view="month"
                onClickDay={(date) => { console.log(date) }}
            />
        </div>
    )
}

export default Calendar