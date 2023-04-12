import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./Details.module.scss";
import { ReactComponent as DashboardLogo } from "../../assests/dashboard.svg";
import { ReactComponent as ProfileLogo } from "../../assests/profile.svg";

const Details = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.Details}>
            <div className={styles.headerwrapper}>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <div className={styles.profilepic}>
                            <RxAvatar size={"100%"} />
                            <div className={styles.editicon}>
                                <MdModeEditOutline />
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className={styles.detail}>Hello,</div>
                            <div className={styles.detail}>Divyam Sharma</div>
                            <div className={styles.detail}>
                                divyamsharmaw822@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className={styles.followingcount}>0 Followers</div>
                </div>
            </div>

            <div className={styles.scrollArea}>
                <div className={styles.content}></div>
                <div className={`d-flex justify-content-end align-items-start mt-3 ${styles.rightbar}`}>
                    <div className={styles.arrow} onClick={()=> setExpanded(!expanded)}>
                        {!expanded ? <IoIosArrowBack size={"20px"} /> : <IoIosArrowForward ize={"20px"} />}
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
                                Icon: DashboardLogo,
                            },
                            {
                                title: "Wishlist",
                                Icon: DashboardLogo,
                            },
                            {
                                title: "Liked Videos",
                                Icon: DashboardLogo,
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
                                              transition:
                                                  "all 0.2s ease-in-out",
                                          }
                                        : {
                                              margin: "5px",
                                              transition:
                                                  "all 0.2s ease-in-out",
                                          }
                                }
                                key={index}>
                                <div
                                    className={styles.open}
                                    style={
                                        expanded
                                            ? {
                                                  padding:
                                                      "0.8em 1em 0.8em 1em",
                                              }
                                            : {
                                                  padding:
                                                      "0.5em 0em 0.5em 0em",
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
            </div>
        </div>
    );
};

export default Details;
