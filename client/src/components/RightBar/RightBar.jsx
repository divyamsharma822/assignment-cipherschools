import React, { useState } from "react";
import { ReactComponent as DashboardLogo } from "../../assests/dashboard.svg";
import { ReactComponent as ProfileLogo } from "../../assests/profile.svg";
import { ReactComponent as CoursesLogo } from "../../assests/courses.svg";
import { ReactComponent as WishlistLogo } from "../../assests/wishlist.svg";
import { ReactComponent as LikedLogo } from "../../assests/liked.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./RightBar.module.scss";

const RightBar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            className={`d-flex justify-content-end align-items-start mt-3 ${styles.Rightbar}`}>
            <div
                className={styles.arrow}
                onClick={() => setExpanded(!expanded)}>
                {!expanded ? (
                    <IoIosArrowBack size={"20px"} />
                ) : (
                    <IoIosArrowForward ize={"20px"} />
                )}
            </div>
            <div className={styles.optionbar}>
                {[
                    {
                        title: "Dashboard",
                        Icon: DashboardLogo,
                    },
                    {
                        title: "Profile",
                        Icon: ProfileLogo,
                    },
                    {
                        title: "Courses",
                        Icon: CoursesLogo,
                    },
                    {
                        title: "Wishlist",
                        Icon: WishlistLogo,
                    },
                    {
                        title: "Liked Videos",
                        Icon: LikedLogo,
                    },
                ].map(({ title, Icon }, index) => (
                    <div
                        className={`${
                            !expanded
                                ? "d-flex flex-column align-items-center justify-content-center"
                                : ""
                        } ${styles.list}`}
                        style={
                            expanded
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
                                expanded
                                    ? {
                                          padding: "0.8em 1em 0.8em 1em",
                                      }
                                    : {
                                          padding: "0.5em 0em 0.5em 0em",
                                      }
                            }>
                            <Icon />
                            {expanded && <div>{title}</div>}
                        </div>
                        {!expanded && (
                            <div className={styles.closed}>{title}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightBar;
