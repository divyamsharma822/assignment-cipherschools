import React, { useState } from "react";
import styles from "./AboutMe.module.scss";
import { useField, Form, Formik } from "formik";

const AboutMe = () => {
    const [editable, setEditable] = useState(false);

    const TextAreaField = ({ label, initialValue, ...props }) => {
        const [field, meta] = useField(props);

        return (
            <>
                <div
                    className={`row g-0 d-flex align-items-start ${styles.inputComponent}`}>
                    <div
                        className={`col-md-12 d-flex flex-column`}>
                        <textarea
                            {...field}
                            {...props}
                            placeholder={label}
                            className={styles.input}
                            value={meta.value}
                            disabled={!editable}
                        />
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
                            className={`${styles.Aboutme}`}
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
                                <TextAreaField
                                    name='about'
                                    type='text'
                                    label='Add something about you.'
                                    rows='4'
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

export default AboutMe;
