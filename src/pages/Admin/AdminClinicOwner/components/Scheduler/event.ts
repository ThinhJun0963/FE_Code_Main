import { EventInput } from '@fullcalendar/core';
import { nanoid } from 'nanoid'; 

const events: EventInput[] = [
    { id: nanoid(), title: "All Day Event", start: new Date(getDate("YEAR-MONTH-01")), allDay: true },
    {
        id: nanoid(),
        title: "Long Event",
        start: new Date(getDate("YEAR-MONTH-07")),
        end: new Date(getDate("YEAR-MONTH-10"))
    },
    {
        id: nanoid(),
        groupId: "999",
        title: "Repeating Event",
        start: new Date(getDate("YEAR-MONTH-09T16:00:00+00:00"))
    },
    {
        id: nanoid(),
        groupId: "999",
        title: "Repeating Event",
        start: new Date(getDate("YEAR-MONTH-16T16:00:00+00:00"))
    },
    // ... (rest of your events)
];

function getDate(dayString: string) {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Pad with '0' if needed
    const formattedDateString = dayString.replace("YEAR", year).replace("MONTH", month);
    return new Date(formattedDateString); // Directly return Date object
}

export default events;
