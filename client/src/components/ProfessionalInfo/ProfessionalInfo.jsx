import React, { useState } from "react";
import styles from "./ProfessionalInfo.module.scss";
import { useField, Form, Formik } from "formik";
import { ReactComponent as Arrowdowndropdown } from "../../assests/arrowdowndropdown.svg";

const ProfessionalInfo = () => {
    const [editable, setEditable] = useState(false);
    const [open1, setOpen1] = useState(false);

    const TextField = ({ label, initialValue, ...props }) => {
        const [field, meta] = useField(props);

        return (
            <>
                <div
                    className={`col-md-6 d-flex flex-column align-items-start ${styles.inputComponent}`}>
                    <div className={styles.label}>{label}</div>
                    <div className={`d-flex flex-column w-100 ${styles.space}`}>
                        <div
                            className={`d-flex align-items-center px-3 ${styles.inputwrapper}`} onClick={()=> setOpen1(!open1)}>
                            <input
                                {...field}
                                {...props}
                                placeholder={label}
                                className={styles.input}
                                value={meta.value}
                                disabled={true}
                            />
                            <Arrowdowndropdown />
                        </div>
                        {open1 && (
                            <div className={styles.options}>
                                <div className={styles.option}>Primary</div>
                                <div className={styles.option}>Primary</div>
                                <div className={styles.option}>Primary</div>
                                <div className={styles.option}>Primary</div>
                            </div>
                        )}

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
                            className={`${styles.ProfessionalInfo}`}
                            style={{
                                cursor: props.isSubmitting ? "wait" : "auto",
                            }}>
                            {/* header */}
                            <div
                                className={`d-flex justify-content-between flex-row ${styles.header}`}>
                                <div className={`${styles.heading}`}>
                                    PROFESSIONAL INFORMATION
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
                                    label='Highest education'
                                />
                                <TextField
                                    name='github'
                                    type='text'
                                    label='What do you do currently?'
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

export default ProfessionalInfo;
