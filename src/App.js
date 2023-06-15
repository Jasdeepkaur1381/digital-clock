import React, { useState } from 'react';

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  let [cTime, setTime] = useState(newTime);

  let col = '#d994f4';
  let text = "Click Me !!"
  let [bg, setbg] = useState(col);
  let [bttext, settext] = useState(text);

  const setClick = () => {
    let newcol = '#34495e';
    setbg(newcol);
    settext("Ouch !!🤨");
  };

  const setDouble = () => {
    setbg(col);
    settext("Ayoo !!😠");
  };

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(UpdateTime, 1000);
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <h1>{cTime}</h1>
        <button onClick={setClick} onDoubleClick={setDouble}>{bttext}</button>
      </div>
    </>
  )
}

export default App;

// workng on events now
//always right your even in CamelCase
//their are morefunction like on mouse over on mouse leave on mouae enter 
