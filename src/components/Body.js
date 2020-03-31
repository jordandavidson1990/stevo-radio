import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div className="audio-player-container">
      <audio controls className="audio-player" autoPlay={false}>
        <source src="brothers.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
