'use client';

import * as Yup from 'yup';

import { Buttons } from '@/components/button';
import { TextField } from '@/components/form';
import React, { useState } from 'react';
import moment from 'moment';
import { Form, FormikProvider, useFormik } from 'formik';
import DialogForm from '@/components/dialog/DialogForm';
import { Icon } from '@iconify/react/dist/iconify.js';
import CreateIdentity from '@/components/ui/respondent/create/CreateIdentity';
import RadioButtons from '@/components/form/RadioButtons';
import CreateVendor from '@/components/ui/respondent/create/CreateVendor';

const optionIdentity = [
    {
        key: 'identity_1',
        value: 'identity_1',
        name: 'identity',
        identityName: 'John Doe',
        phoneNumber: '08123456789',
        identityNumbeer: '367012345678900',
    },
    {
        key: 'identity_2',
        value: 'identity_2',
        name: 'identity',
        identityName: 'Dane Mark',
        phoneNumber: '08123456789',
        identityNumbeer: '367012345678900',
    },
];

const optionProject = [
    {
        key: 'project_1',
        value: 'project_1',
        name: 'project',
        projectName: 'Blossom',
        department: 'QUANTITATIVE',
    },
    {
        key: 'project_2',
        value: 'project_2',
        name: 'project',
        projectName: 'Blossom 2',
        department: 'QUALITATIVE',
    },
];

const optionVendor = [
    {
        key: 'vendorKey_1',
        value: 'vendorValue_1',
        name: 'vendor',
        vendorName: 'Blabla',
        type: 'INTERNAL',
    },
    {
        key: 'vendorKey_2',
        value: 'vendorValue_2',
        name: 'vendor',
        vendorName: 'Blibli',
        type: 'EXTERNAL',
    },
];

const LayoutCreateRespondent = () => {
    const [openIdentityList, setOpenIdentityList] = useState(false);
    const handleOpenIdentityList = () => {
        setOpenIdentityList(!openIdentityList);
    };

    const [openProjectList, setOpenProjectList] = useState(false);
    const handleOpenProjectList = () => {
        setOpenProjectList(!openProjectList);
    };

    const [openVendorList, setOpenVendorList] = useState(false);
    const handleOpenVendorList = () => {
        setOpenVendorList(!openVendorList);
    };

    const [openFormIdentity, setOpenFormIdentity] = useState(false);
    const handleOpenFormIdentity = () => {
        setOpenFormIdentity(!openFormIdentity);
    };

    const [openFormVendor, setOpenFormVendor] = useState(false);
    const handleOpenFormVendor = () => {
        setOpenFormVendor(!openFormVendor);
    };

    const initialSchema = Yup.object().shape({
        identity: Yup.string().required('Identity is required'),
        project: Yup.string().required('Project is required'),
        vendor: Yup.string().required('Vendor is required'),
    });
    const formik = useFormik({
        initialValues: {
            identity: '',
            identityName: '',
            project: '',
            projectName: '',
            vendor: '',
            vendorName: '',
            visitDate: moment().toISOString(),
        },
        validationSchema: initialSchema,
        onSubmit: values => {
            console.log(values);
            alert(
                `Identity: ${values.identityName}, Project: ${values.projectName}, Vendor: ${values.vendorName}, Visit Date: ${values.visitDate}`
            );
        },
    });
    const {
        handleSubmit,
        handleChange,
        setFieldValue,
        values,
        touched,
        errors,
    } = formik;

    return (
        <div>
            <DialogForm
                title="Add New Identity"
                isOpen={openFormIdentity}
                onClose={handleOpenFormIdentity}
            >
                <CreateIdentity setOpenFormIdentity={setOpenFormIdentity} />
            </DialogForm>
            <DialogForm
                title="Add New Vendor"
                isOpen={openFormVendor}
                onClose={handleOpenFormVendor}
            >
                <CreateVendor setOpenFormVendor={setOpenFormVendor} />
            </DialogForm>
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
                            Create New Respondent
                        </div>
                        <div className="w-full text-text-md font-medium">
                            Complete respondent information
                        </div>
                    </span>
                </div>
                <FormikProvider value={formik}>
                    <Form noValidate onSubmit={handleSubmit} className="w-full">
                        <div className="mb-3 w-full gap-4">
                            {/* <DialogForm
                                title="Add New Identity"
                                isOpen={openFormIdentity}
                                onClose={handleOpenFormIdentity}
                            >
                                <CreateIdentity
                                    setOpenFormIdentity={setOpenFormIdentity}
                                />
                            </DialogForm>
                            <DialogForm
                                title="Add New Vendor"
                                isOpen={openFormVendor}
                                onClose={handleOpenFormVendor}
                            >
                                <CreateVendor
                                    setOpenFormVendor={setOpenFormVendor}
                                />
                            </DialogForm> */}
                            <div>
                                <div className="w-full text-text-sm">
                                    Identity <sup className="text-red">*</sup>
                                </div>
                                <div className="flex">
                                    <div className="relative grow">
                                        <TextField
                                            name="projectName"
                                            type="text"
                                            placeholder="Identity Name"
                                            value={values.identityName}
                                            fullWidth
                                            onChange={handleChange}
                                            error={Boolean(
                                                touched.identity &&
                                                    errors.identity
                                            )}
                                            helperText={
                                                touched.identity &&
                                                errors.identity
                                            }
                                            contentAfter={
                                                <Icon
                                                    icon="fluent:chevron-down-20-regular"
                                                    width="20"
                                                    height="20"
                                                    onClick={
                                                        handleOpenIdentityList
                                                    }
                                                    className="cursor-pointer"
                                                />
                                            }
                                            onClick={handleOpenIdentityList}
                                        />
                                        {openIdentityList && (
                                            <div className="absolute z-10 block w-[501px] rounded-lg bg-white px-[18px] py-4 shadow">
                                                <div className="mb-4 w-full">
                                                    <TextField
                                                        name="searchIdentity"
                                                        type="search"
                                                        fullWidth
                                                        className="mb-4 w-full"
                                                        placeholder="search name"
                                                        contentBefore={
                                                            <Icon
                                                                icon="fluent:search-16-regular"
                                                                width="16"
                                                                height="16"
                                                            />
                                                        }
                                                        // onChange={
                                                        //     handleSearchVendor
                                                        // }
                                                    />
                                                </div>
                                                <div className="max-h-75 w-full overflow-auto">
                                                    {optionIdentity.map(
                                                        option => (
                                                            <RadioButtons
                                                                key={option.key}
                                                                value={
                                                                    option.value
                                                                }
                                                                name={
                                                                    option.name
                                                                }
                                                                label={
                                                                    <div className="flex flex-col items-start">
                                                                        <div>
                                                                            {
                                                                                option.identityName
                                                                            }
                                                                        </div>
                                                                        <div>
                                                                            {
                                                                                option.phoneNumber
                                                                            }
                                                                        </div>
                                                                        <div>
                                                                            {
                                                                                option.identityNumbeer
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                }
                                                                onClick={(
                                                                    e: any
                                                                ) => {
                                                                    setFieldValue(
                                                                        'identity',
                                                                        e.target
                                                                            .value
                                                                    );
                                                                    setFieldValue(
                                                                        'identityName',
                                                                        option.identityName
                                                                    );
                                                                    handleOpenIdentityList();
                                                                    console.log(
                                                                        values.identity,
                                                                        values.identityName
                                                                    );
                                                                }}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="content-center px-2">
                                        <Buttons
                                            text="Add New"
                                            size="sm"
                                            variant="text"
                                            icon="fluent:add-20-regular"
                                            iconSize={16}
                                            color="primary"
                                            type="button"
                                            onClick={handleOpenFormIdentity}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full text-text-sm">
                                    Project <sup className="text-red">*</sup>
                                </div>
                                <div>
                                    <TextField
                                        name="projectName"
                                        type="text"
                                        placeholder="Project Name"
                                        value={values.projectName}
                                        fullWidth
                                        onChange={handleChange}
                                        error={Boolean(
                                            touched.project && errors.project
                                        )}
                                        helperText={
                                            touched.project && errors.project
                                        }
                                        contentAfter={
                                            <Icon
                                                icon="fluent:chevron-down-20-regular"
                                                width="20"
                                                height="20"
                                                onClick={handleOpenProjectList}
                                                className="cursor-pointer"
                                            />
                                        }
                                        onClick={handleOpenProjectList}
                                    />
                                    {openProjectList && (
                                        <div className="absolute z-10 block w-[634px] rounded-lg bg-white px-[18px] py-4 shadow">
                                            <div className="mb-4 w-full">
                                                <TextField
                                                    name="searchProject"
                                                    type="search"
                                                    fullWidth
                                                    className="mb-4 w-full"
                                                    placeholder="search name"
                                                    contentBefore={
                                                        <Icon
                                                            icon="fluent:search-16-regular"
                                                            width="16"
                                                            height="16"
                                                        />
                                                    }
                                                    // onChange={
                                                    //     handleSearchVendor
                                                    // }
                                                />
                                            </div>
                                            <div className="max-h-75 w-full overflow-auto">
                                                {optionProject.map(option => (
                                                    <RadioButtons
                                                        key={option.key}
                                                        value={option.value}
                                                        name={option.name}
                                                        label={
                                                            <div className="flex flex-col items-start">
                                                                <div>
                                                                    {
                                                                        option.projectName
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {
                                                                        option.department
                                                                    }
                                                                </div>
                                                            </div>
                                                        }
                                                        onClick={(e: any) => {
                                                            setFieldValue(
                                                                'project',
                                                                e.target.value
                                                            );
                                                            setFieldValue(
                                                                'projectName',
                                                                option.projectName
                                                            );
                                                            handleOpenProjectList();
                                                            console.log(
                                                                values.project,
                                                                values.projectName
                                                            );
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <div>
                                    <div className="w-full text-text-sm">
                                        Vendor <sup className="text-red">*</sup>
                                    </div>
                                    <div className="flex">
                                        <div className="relative grow">
                                            <TextField
                                                name="projectName"
                                                type="text"
                                                placeholder="Vendor Name"
                                                fullWidth
                                                value={values.vendorName}
                                                onChange={handleChange}
                                                error={Boolean(
                                                    touched.vendor &&
                                                        errors.vendor
                                                )}
                                                helperText={
                                                    touched.vendor &&
                                                    errors.vendor
                                                }
                                                contentAfter={
                                                    <Icon
                                                        icon="fluent:chevron-down-20-regular"
                                                        width="20"
                                                        height="20"
                                                        onClick={
                                                            handleOpenVendorList
                                                        }
                                                        className="cursor-pointer"
                                                    />
                                                }
                                                onClick={handleOpenVendorList}
                                            />
                                            {openVendorList && (
                                                <div className="absolute z-10 block w-[501px] rounded-lg bg-white px-[18px] py-4 shadow">
                                                    <div className="mb-4 w-full">
                                                        <TextField
                                                            name="searchVendor"
                                                            type="search"
                                                            fullWidth
                                                            className="mb-4 w-full"
                                                            placeholder="search name"
                                                            contentBefore={
                                                                <Icon
                                                                    icon="fluent:search-16-regular"
                                                                    width="16"
                                                                    height="16"
                                                                />
                                                            }
                                                            // onChange={
                                                            //     handleSearchVendor
                                                            // }
                                                        />
                                                    </div>
                                                    <div className="max-h-75 w-full overflow-auto">
                                                        {optionVendor.map(
                                                            option => (
                                                                <RadioButtons
                                                                    key={
                                                                        option.key
                                                                    }
                                                                    value={
                                                                        option.value
                                                                    }
                                                                    name={
                                                                        option.name
                                                                    }
                                                                    label={
                                                                        <div className="flex flex-col items-start">
                                                                            <div>
                                                                                {
                                                                                    option.vendorName
                                                                                }
                                                                            </div>
                                                                            <div>
                                                                                {
                                                                                    option.type
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    onClick={(
                                                                        e: any
                                                                    ) => {
                                                                        setFieldValue(
                                                                            'vendor',
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                        setFieldValue(
                                                                            'vendorName',
                                                                            option.vendorName
                                                                        );
                                                                        handleOpenVendorList();
                                                                        console.log(
                                                                            values.vendor,
                                                                            values.vendorName
                                                                        );
                                                                    }}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="content-center px-2">
                                            <Buttons
                                                text="Add New"
                                                size="sm"
                                                variant="text"
                                                icon="fluent:add-20-regular"
                                                iconSize={16}
                                                color="primary"
                                                type="button"
                                                onClick={handleOpenFormVendor}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div>
                                    <div className="w-full text-text-sm">
                                        Visit Date{' '}
                                        <sup className="text-red">*</sup>
                                    </div>
                                    <div>
                                        <TextField
                                            name="date"
                                            fullWidth
                                            type="date"
                                            defaultValue={moment(
                                                values.visitDate
                                            ).format('YYYY-MM-DD')}
                                            onChange={handleChange}
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

export default LayoutCreateRespondent;
