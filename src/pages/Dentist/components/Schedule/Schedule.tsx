import "./Schedule.css";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ViewsDirective,
  ViewDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { defaultData } from "../../data";

const Schedule = () => {
  const eventSettings = { dataSource: defaultData };
  return (
    <ScheduleComponent
      height="550px"
      selectedDate={new Date(2024, 5, 7)}
      eventSettings={eventSettings}
    >
      <ViewsDirective>
        <ViewDirective option="Day" startHour="7:00" endHour="24:00" />
        <ViewDirective option="Week" startHour="07:00" endHour="24:00" />
        <ViewDirective option="Month" showWeekend={false} />
        <ViewDirective option="Agenda" />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};
export default Schedule;
