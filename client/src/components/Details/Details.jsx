import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import AboutMe from "../AboutMe/AboutMe";
import CipherMap from "../CipherMap/CipherMap";
import RightBar from "../RightBar/RightBar";
import styles from "./Details.module.scss";

const Details = () => {
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
                <div className={styles.content}>
                    <AboutMe />
                    <CipherMap />
                </div>
                <RightBar />
            </div>
        </div>
    );
};

export default Details;
