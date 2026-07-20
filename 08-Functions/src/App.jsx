import React from "react";

const App = () => {

  function inputChanging(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Text"
        onChange={inputChanging}
      />
    </div>
  );
};

export default App;