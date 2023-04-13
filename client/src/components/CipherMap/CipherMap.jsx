import React from "react";
import styles from "./CipherMap.module.scss";
import CalendarHeatmap from "react-calendar-heatmap";
import "./twek.css";

const today = new Date();

const CipherMap = () => {

    return (
        <div className={styles.CipherMap}>
            <div className={`${styles.heading}`}>CIPHER MAP</div>
            <CalendarHeatmap
                startDate={shiftDate(today, -367)}
                endDate={today}
                values={[]}
                showWeekdayLabels={true}
            />
            <div className={`d-flex ${styles.indicator}`}>
                Less 
                <svg width="12" height="12"><rect width="12" height="12" fill="#262c36"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#f3dcc4"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#e5b583"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#d48432"></rect></svg>
                <svg width="12" height="12"><rect width="12" height="12" fill="#c87a2a"></rect></svg>
                More
            </div>
            <div className={styles.hr}></div>
        </div>
    );
};

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default CipherMap;
