import { useState } from "react";
import { Calendar as CalendarComp } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <CalendarComp onChange={onChange} value={value} />
    </div>
  );
};
