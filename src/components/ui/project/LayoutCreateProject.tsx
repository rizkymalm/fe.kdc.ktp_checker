'use client';

import * as Yup from 'yup';

import { Buttons } from '@/components/button';
import { SelectOptions, TextField } from '@/components/form';
import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';

const optionGender = [
    {
        key: 'selectDepartment',
        text: 'Select Department',
        value: '',
    },
    {
        key: 'QUANTITATIVE',
        text: 'QUANTITATIVE',
        value: 'QUANTITATIVE',
    },
    {
        key: 'QUALITATIVE',
        text: 'QUALITATIVE',
        value: 'QUALITATIVE',
    },
];

const LayoutCreateProject = () => {
    const initialSchema = Yup.object().shape({
        projectName: Yup.string().required('Project Name is required'),
        department: Yup.string().required('Department is required'),
        study: Yup.string().required('Study is required'),
    });
    const formik = useFormik({
        initialValues: {
            projectName: '',
            department: '',
            study: '',
        },
        validationSchema: initialSchema,
        onSubmit: values => {
            console.log(values);
        },
    });
    const { handleSubmit, touched, errors } = formik;

    return (
        <div>
            <div className="container mx-auto max-w-[698px] border-neutral-100 bg-white p-8">
                {/* <div className="fixed left-1/2 top-5 z-999">
                    {alertMessage && (
                        <Alert
                            type={
                                userState?.actions?.type === 'success'
                                    ? 'success'
                                    : 'error'
                            }
                            text={
                                userState?.actions?.type === 'success'
                                    ? `${userState?.actions?.message?.data}`
                                    : `${userState?.actions?.error?.statusCode} : ${userState?.actions?.error?.message}`
                            }
                        />
                    )}
                </div> */}
                <div className="mb-6 flex items-start justify-between">
                    <span>
                        <div className="w-full text-title-xs font-semibold">
                            Create New Project
                        </div>
                        <div className="w-full text-text-md font-medium">
                            Complete project information
                        </div>
                    </span>
                </div>
                <FormikProvider value={formik}>
                    <Form noValidate onSubmit={handleSubmit} className="w-full">
                        <div className="mb-3 w-full gap-4">
                            <div>
                                <div className="w-full text-text-sm">
                                    Project Name{' '}
                                    <sup className="text-red">*</sup>
                                </div>
                                <div>
                                    <TextField
                                        name="projectName"
                                        type="text"
                                        placeholder="Project Name"
                                        fullWidth
                                        onChange={formik.handleChange}
                                        error={Boolean(
                                            touched.projectName &&
                                                errors.projectName
                                        )}
                                        helperText={
                                            touched.projectName &&
                                            errors.projectName
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full text-text-sm">
                                    Department <sup className="text-red">*</sup>
                                </div>
                                <div>
                                    <SelectOptions
                                        name="derpartment"
                                        label=""
                                        options={optionGender}
                                        onChange={e => {
                                            formik.setFieldValue(
                                                'department',
                                                e.target.value
                                            );
                                        }}
                                        error={Boolean(
                                            touched.department &&
                                                errors.department
                                        )}
                                        helperText={
                                            touched.department &&
                                            errors.department
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div>
                                    <div className="w-full text-text-sm">
                                        Study <sup className="text-red">*</sup>
                                    </div>
                                    <div>
                                        <TextField
                                            name="study"
                                            type="text"
                                            placeholder="Project Name"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            error={Boolean(
                                                touched.study && errors.study
                                            )}
                                            helperText={
                                                touched.study && errors.study
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="table w-full items-center justify-between rounded-b px-3 pt-5">
                                <div className="table-cell w-[47.5%]">
                                    <Buttons
                                        variant="text"
                                        size="lg"
                                        type="reset"
                                        text="Cancel"
                                        fullWidth
                                        onClick={() => window.history.back()}
                                        color="primary"
                                    />
                                </div>
                                <div className="table-cell w-[5%]" />
                                <div className="table-cell w-[47.5%]">
                                    <Buttons
                                        variant="contained"
                                        size="lg"
                                        type="submit"
                                        text="Save"
                                        fullWidth
                                        // loading={userState?.actions?.loading}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    );
};

export default LayoutCreateProject;
