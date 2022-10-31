import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Play() {
    return (
        <div className="Play">
            <h1>Banff Log Cabin</h1>
            <YoutubeEmbed embedId="yLJyoUcXhRQ" />
        </div>
    );
}