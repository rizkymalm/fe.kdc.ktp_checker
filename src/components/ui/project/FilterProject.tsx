import { Buttons } from '@/components/button';
import { SelectOptions, TextField } from '@/components/form';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import React, { useState } from 'react';

const filterTypes = [
    {
        key: 'all',
        text: 'All Department',
        value: '',
    },
    {
        key: 'QUANTITATIVE',
        text: 'QUANTITATIVE',
        value: 'QUANTITATIVE',
    },
    {
        key: 'QUALITATIIVE',
        text: 'QUALITATIIVE',
        value: 'QUALITATIIVE',
    },
];

interface Props {
    params: {
        page: number;
        perPage: number;
        search: string;
        department: string;
    };
    setParams: any;
}

const FilterProject = ({ params, setParams }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="grid w-full grid-cols-3 gap-4">
            <div>
                <div className="mb-4 max-w-[335px] bg-[#ffffff]">
                    <TextField
                        name="search"
                        type="search"
                        placeholder="Search"
                        contentBefore={
                            <Icon
                                icon="fluent:search-20-regular"
                                width="20"
                                height="20"
                            />
                        }
                        fullWidth
                        value={searchTerm}
                        contentAfter={
                            searchTerm && (
                                <Icon
                                    icon="fluent:dismiss-circle-20-filled"
                                    width="20"
                                    height="20"
                                    className="cursor-pointer"
                                    onClick={() => setSearchTerm('')}
                                />
                            )
                        }
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative mt-auto w-[150px]">
                        <SelectOptions
                            name="identity-types"
                            label=""
                            options={filterTypes}
                            onChange={(e: any) =>
                                setParams({
                                    ...params,
                                    type: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            </div>
            <div />
            <div className="float-right justify-self-end">
                <Link href="./project/create">
                    <Buttons
                        text="New Project"
                        icon="fluent:add-24-regular"
                        iconSize={24}
                        variant="contained"
                        size="md"
                        type="button"
                        color="primary"
                    />
                </Link>
            </div>
        </div>
    );
};

export default FilterProject;
