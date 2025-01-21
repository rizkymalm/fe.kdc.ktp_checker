import React from 'react';

interface Props {
    status: 'ACTIVE' | 'INACTIVE';
}

const BadgeStatus = ({ status }: Props) => {
    const badgeColor =
        status === 'ACTIVE'
            ? 'bg-success-50 text-success-700'
            : 'bg-[#F2F4F7] text-[#344054]';
    // 'bg-[#FEF3F2] text-[#B42318]'

    return (
        <span
            className={`rounded-[16px] px-[10px] py-[2px] text-center ${badgeColor}`}
        >
            {status}
        </span>
    );
};

export default BadgeStatus;
