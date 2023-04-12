import React, { useState } from "react";
import styles from "./Profile.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Details from "../components/Details/Details";

const Profile = () => {

    const [open,setOpen] = useState(false);
    return (
        <div className={styles.Profile}>
            <Navbar setOpen={setOpen} open={open} />
            <div className='d-flex'>
                <Sidebar open={open} />
                <Details />
            </div>
        </div>
    );
};

export default Profile;
