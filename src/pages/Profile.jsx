import React from 'react'
import styles from "./Profile.module.scss";
import Navbar from '../components/Navbar/Navbar';

const Profile = () => {
  return (
    <div className={styles.Profile}>
        <Navbar />
    </div>
  )
}

export default Profile;