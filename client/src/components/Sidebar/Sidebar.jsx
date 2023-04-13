import React from "react";
import styles from "./Sidebar.module.scss";
import { ReactComponent as HomeLogo } from "../../assests/home.svg";
import { ReactComponent as CoursesLogo } from "../../assests/courses.svg";
import { ReactComponent as TrendingLogo } from "../../assests/trending.svg";
import { ReactComponent as FollowingLogo } from "../../assests/following.svg";
import { ReactComponent as DashboardLogo } from "../../assests/dashboard.svg";
import { ReactComponent as DiscordLogo } from "../../assests/discord.svg";
import { ReactComponent as CreatorAccessLogo } from "../../assests/creator.svg";
import { ReactComponent as FeedbackLogo } from "../../assests/feedback.svg";
import { ReactComponent as TourLogo } from "../../assests/tour.svg";
import { ReactComponent as LogoutLogo } from "../../assests/logout.svg";

const Sidebar = ({ open }) => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.top}>
                {[
                    {
                        title: "Home",
                        Icon: HomeLogo,
                    },
                    {
                        title: "Courses",
                        Icon: CoursesLogo,
                    },
                    {
                        title: "Trending",
                        Icon: TrendingLogo,
                    },
                    {
                        title: "Following",
                        Icon: FollowingLogo,
                    },
                    {
                        title: "Dashboard",
                        Icon: DashboardLogo,
                    },
                    {
                        title: "Discord",
                        Icon: DiscordLogo,
                    },
                    {
                        title: "Creator Access",
                        Icon: CreatorAccessLogo,
                    },
                    {
                        title: "Send Feedback",
                        Icon: FeedbackLogo,
                    },
                    {
                        title: "User Tour",
                        Icon: TourLogo,
                    },
                ].map(({ title, Icon }, index) => (
                    <div
                        className={`${
                            !open
                                ? "d-flex flex-column align-items-center justify-content-center"
                                : ""
                        } ${styles.list}`}
                        style={
                            open
                                ? {
                                      margin: "5px 10px",
                                      transition: "all 0.2s ease-in-out",
                                  }
                                : {
                                      margin: "5px",
                                      transition: "all 0.2s ease-in-out",
                                  }
                        }
                        key={index}>
                        <div
                            className={styles.open}
                            style={
                                open
                                    ? {
                                          padding: "0.8em 1em 0.8em 1em",
                                      }
                                    : {
                                          padding: "0.5em 0em 0.5em 0em",
                                      }
                            }>
                            <Icon />
                            {open && <div>{title}</div>}
                        </div>
                        {!open && <div className={styles.closed}>{title}</div>}
                    </div>
                ))}
            </div>
            {open ? (
                <div className={styles.bottom}>
                    <div className={styles.hr}></div>
                    <div className={styles.logout}>
                        <LogoutLogo />
                        Logout
                    </div>
                </div>
            ) : (
                <div className={`${styles.bottomclosed}`}>
                    <div className={styles.hr}></div>
                    <div className={`d-flex flex-column ${styles.logout}`}>
                        <LogoutLogo />
                        Logout
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
