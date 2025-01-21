import DefaultLayout from '@/components/layout/DefaultLayout';
import LayoutCreateRespondent from '@/components/ui/respondent/create/LayoutCreateRespondent';
import React from 'react';

const CreateRespondentPage = () => {
    return (
        <DefaultLayout title="New Respondent">
            <LayoutCreateRespondent />
        </DefaultLayout>
    );
};

export default CreateRespondentPage;
