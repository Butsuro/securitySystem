import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmOn, setAlarmOn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className={`relative min-h-[60vh] w-full ${
          alarmOn
            ? "bg-gradient-to-br from-red-900 via-red-600 to-red-400"
            : "bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400"
        } overflow-hidden pb-20 transition-all duration-500`}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-10">
          {/* Hamburger Menu */}
          <button className="text-white pl-10">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Welcome Text */}
          <p className="text-white text-sm font-light">
            Welcome to your dashboard{" "}
            <span className="font-semibold">Team 6</span>
          </p>

          {/* Clock */}
          <div className="flex items-center gap-2 text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="text-sm font-light pr-10">
              {formatTime(currentTime)}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 px-12 max-w-7xl mx-auto z-10">
          <div className="flex items-center justify-between">
            {/* Left Side - Status */}
            <div className="flex items-center gap-8 -ml-12">
              {/* Shield/Alarm Icon */}
              <div className="bg-white rounded-full p-8 shadow-xl">
                {alarmOn ? (
                  <svg
                    className="w-24 h-24 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                  </svg>
                ) : (
                  <svg
                    className="w-24 h-24 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z" />
                  </svg>
                )}
              </div>

              {/* Status Text */}
              <div>
                <p className="text-white text-3xl font-light mb-2">
                  Your Security System is
                </p>
                <h1 className="text-white text-7xl font-medium border-b-4 border-white pb-2 inline-block">
                  {alarmOn ? "On Alarm" : "Armed"}
                </h1>
              </div>
            </div>

            {/* Right Side - Access Log */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[400px] -mr-20">
              <div className="flex items-center gap-2 mb-4 text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
                <span className="font-light">Access History Log</span>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-[auto_1fr] gap-2 gap-x-20 text-white text-sm">
                  <span className="font-light">5:00 AM</span>
                  <span className="font-light">Pin Entry</span>

                  <span className="font-light">3:22 PM</span>
                  <span className="font-light">FingerPrint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Indicator*/}
        <div className="z-70 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#f9fafb] rounded-full w-32 h-32 shadow-lg flex items-center justify-center z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 7 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-blue-600 animate-bounce transition-colors duration-500"
            style={{ color: alarmOn ? "#dc2626" : "#2563eb" }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Button
            icon="/accessControl.png"
            label="Security Options"
            onClick={() => console.log("Security clicked")}
          />

          <Button
            icon="/cctv.png"
            label="Live Surveillance"
            onClick={() => console.log("Surveillance clicked")}
          />

          <Button
            icon="/recommendations.png"
            label="Recommendations"
            onClick={() => console.log("Recommendations clicked")}
          />

          <Button
            icon="/alarm.png"
            label="Alarm"
            status={alarmOn ? "on" : "off"}
            iconColor={alarmOn ? "red" : ""}
            onClick={() => setAlarmOn(!alarmOn)}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
