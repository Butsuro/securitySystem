import { useEffect, useState } from "react";
import './index.css';

function App() {
return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    {/* Use h-40 and w-40 */}
    <section id="hero" className="h-40 center">
          <p id="userAccount">Welcome to your dashboard <span class="highlight">Team 6</span></p>
          <p id="heroText" className="">Your Security System is</p>
          <h1 id="systemStatus" className="">Armed</h1>
          <img id="heroIcon" src="security_icon.png" alt="Security Icon" className=""/>


    </section>
    <p className="text-lg text-green-400">Tailwind is working!</p>
  </div>
);


}

export default App;

