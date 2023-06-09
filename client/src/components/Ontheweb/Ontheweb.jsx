import React, { useState } from "react";
import styles from "./Ontheweb.module.scss";
import { useField, Form, Formik } from "formik";
import { ReactComponent as LinkedInLogo } from "../../assests/linkedin.svg";
import { ReactComponent as Editlogo } from "../../assests/edit.svg";
import { ReactComponent as GithubLogo } from "../../assests/github.svg";
import { ReactComponent as FacebookLogo } from "../../assests/facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assests/twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assests/instagram.svg";

const Ontheweb = () => {
    const [editable, setEditable] = useState(false);

    const TextField = ({ label,Icon, initialValue, ...props }) => {
        const [field, meta] = useField(props);

        return (
            <>
                <div
                    className={`col-md-6 col-lg-4 d-flex flex-column align-items-start ${styles.inputComponent}`}>
                    <div className={styles.label}>{label}</div>
                    <div
                        className={`d-flex flex-column w-100 ${styles.space}`}>
                        <div className={`d-flex align-items-center px-3 ${styles.inputwrapper}`}>
                            <Icon />
                            <input
                                {...field}
                                {...props}
                                placeholder={label}
                                className={styles.input}
                                value={meta.value}
                                disabled={!editable}
                            />
                            {editable && <Editlogo/>}
                        </div>

                        {meta.touched && meta.error ? (
                            <div className={styles.error}>{meta.error}</div>
                        ) : null}
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Formik
                initialValues={{
                    about: "",
                }}
                onSubmit={(values, actions) => {
                    setEditable(!editable);
                    actions.setSubmitting(false);
                }}>
                {(props) => (
                    <Form>
                        <div
                            className={`${styles.Ontheweb}`}
                            style={{
                                cursor: props.isSubmitting ? "wait" : "auto",
                            }}>
                            {/* header */}
                            <div
                                className={`d-flex justify-content-between flex-row ${styles.header}`}>
                                <div className={`${styles.heading}`}>
                                    ABOUT ME
                                </div>
                                {editable === false && (
                                    <button
                                        type='button'
                                        className={`${styles.edit}`}
                                        onClick={() => setEditable(!editable)}
                                        disabled={props.isSubmitting}>
                                        Edit
                                    </button>
                                )}
                                {editable === true && (
                                    <button
                                        type='submit'
                                        className={`${styles.save}`}
                                        disabled={props.isSubmitting}>
                                        Save
                                    </button>
                                )}
                            </div>

                            {/* form */}
                            <div className={`row g-0 ${styles.formWrapper}`}>
                                <TextField
                                    name='linkedin'
                                    type='text'
                                    label='Linkedin'
                                    Icon={LinkedInLogo}
                                />
                                 <TextField
                                    name='github'
                                    type='text'
                                    label='Github'
                                    Icon={GithubLogo}
                                />
                                 <TextField
                                    name='facebook'
                                    type='text'
                                    label='Facebook'
                                    Icon={FacebookLogo}
                                />
                                 <TextField
                                    name='twitter'
                                    type='text'
                                    label='Twitter'
                                    Icon={TwitterLogo}
                                />
                                 <TextField
                                    name='about'
                                    type='text'
                                    label='LinkedIn'
                                    Icon={InstagramLogo}
                                />
                                 <TextField
                                    name='about'
                                    type='text'
                                    label='LinkedIn'
                                    Icon={LinkedInLogo}
                                />
                                <div className={styles.hr}></div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Ontheweb;
