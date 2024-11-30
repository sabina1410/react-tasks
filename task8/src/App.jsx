import React from "react";
import CustomButton from "./CustomButton";

function App() {
  return (
    <div className="app">
      <CustomButton 
        text="Delete" 
        warnMessage="Are you sure you want to delete this?" 
      />

     
      <CustomButton 
        text="Hover over me" 
        hint="This is a helpful tooltip!" 
      />

      
      <CustomButton 
        text="Dangerous Action" 
        warnMessage="This is a risky action!" 
        hint="Think twice before proceeding."
      />
    </div>
  );
}

export default App;
