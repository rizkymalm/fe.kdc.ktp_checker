import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { SelectOptions, TextField } from '@/components/form';
import { Buttons } from '@/components/button';

interface Props {
    setOpenFormVendor: any;
}

const optionVendorType = [
    {
        key: 'selectVendorType',
        text: 'Select Vendor Type',
        value: '',
    },
    {
        key: 'INTERNAL',
        text: 'INTERNAL',
        value: 'INTERNAL',
    },
    {
        key: 'EXTERNAL',
        text: 'EXTERNAL',
        value: 'EXTERNAL',
    },
];

const CreateVendor = ({ setOpenFormVendor }: Props) => {
    const InitialSchema = Yup.object().shape({
        vendorName: Yup.string().required('Vendor Name is required'),
        vendorType: Yup.string().required('Vendor Type is required'),
    });
    const formik = useFormik({
        initialValues: {
            vendorName: '',
            vendorType: '',
        },
        validationSchema: InitialSchema,
        onSubmit: async values => {
            console.log(values);
        },
    });
    const { handleChange, errors, touched, handleSubmit, setFieldValue } =
        formik;
    return (
        <div className="flex">
            <FormikProvider value={formik}>
                <Form noValidate onSubmit={handleSubmit} className="w-full">
                    <div className="mb-5 w-full gap-5">
                        <div className="w-full text-text-sm">
                            Name<sup className="text-red">*</sup>
                        </div>
                        <div className="w-full">
                            <TextField
                                name="vendorName"
                                type="text"
                                placeholder="Enter Vendor Name"
                                onChange={handleChange}
                                error={Boolean(
                                    touched.vendorName && errors.vendorName
                                )}
                                helperText={
                                    touched.vendorName && errors.vendorName
                                }
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="my-5 w-full gap-5">
                        <div className="w-full text-text-sm">
                            Type<sup className="text-red">*</sup>
                        </div>
                        <div className="w-full">
                            <SelectOptions
                                name="vendorType"
                                options={optionVendorType}
                                onChange={(e: any) => {
                                    setFieldValue('vendorType', e.target.value);
                                }}
                                error={Boolean(
                                    touched.vendorType && errors.vendorType
                                )}
                                helperText={
                                    touched.vendorType && errors.vendorType
                                }
                            />
                        </div>
                    </div>
                    <div className="table w-full items-center justify-between rounded-b border-t border-solid border-neutral-100 px-3 pt-5">
                        <div className="table-cell w-[47.5%]">
                            <Buttons
                                variant="text"
                                size="md"
                                type="reset"
                                text="Cancel"
                                fullWidth
                                onClick={() => setOpenFormVendor(false)}
                                color="primary"
                            />
                        </div>
                        <div className="table-cell w-[5%]" />
                        <div className="table-cell w-[47.5%]">
                            <Buttons
                                variant="contained"
                                size="md"
                                type="submit"
                                text="Save Vendor"
                                fullWidth
                                color="primary"
                            />
                        </div>
                    </div>
                </Form>
            </FormikProvider>
        </div>
    );
};

export default CreateVendor;
