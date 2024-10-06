import React from "react";

function Clock({ time }){
  return (
    <div>
      <h1>{time.hour}:{time.minute}:{time.second}</h1>
    </div>
  );
}

export default Clock;