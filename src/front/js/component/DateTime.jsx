import React, { useState } from "react";

const DateTime = () => {
  const today = new Date().toISOString().slice(0, 16);
  const [dateTime, setDateTime] = useState()
  console.log(dateTime)

  
  return (
    <div>
      <input
        type="datetime-local"
        min={today}
        onChange={(event)=>{
          setDateTime(event.target.value)
        }}
        value={dateTime}
        required
        className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      />
      
    </div>
  );
};

export default DateTime;
