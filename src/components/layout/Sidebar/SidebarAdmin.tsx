import { Icon } from '@iconify/react';
import React from 'react';

import SidebarItem from '@/components/layout/Sidebar/SidebarItem';
import SidebarItemCollapse from '@/components/layout/Sidebar/SidebarItemCollapse';

const SidebarAdmin = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const menuGroups = [
        {
            name: 'MENU',
            menuItems: [
                {
                    id: 'home',
                    icon: (
                        <Icon
                            icon="fluent:home-24-regular"
                            width="24"
                            height="24"
                        />
                    ),
                    label: 'Home',
                    route: '/',
                },
            ],
        },
        {
            name: 'Management',
            menuItems: [
                {
                    id: 'identity',
                    icon: (
                        <Icon
                            icon="fluent:card-ui-24-regular"
                            width="24"
                            height="24"
                        />
                    ),
                    label: 'Identity',
                    route: '/identity',
                },
                {
                    id: 'projecet',
                    icon: (
                        <Icon
                            icon="fluent:card-ui-24-regular"
                            width="24"
                            height="24"
                        />
                    ),
                    label: 'Project',
                    route: '/project',
                },
                {
                    id: 'respondent',
                    icon: (
                        <Icon
                            icon="fluent:card-ui-24-regular"
                            width="24"
                            height="24"
                        />
                    ),
                    label: 'Respondent',
                    route: '/respondent',
                },
            ],
        },
    ];

    return menuGroups.map(group => (
        <div key={`sidebarmenu${group.name}`}>
            {!props.sidebarOpen && (
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                    {group.name}
                </h3>
            )}
            <ul className="mb-6 flex flex-col gap-1.5">
                {group.menuItems.map(menuItem =>
                    !props.sidebarOpen ? (
                        <SidebarItem
                            key={`menuIndex${menuItem.id}`}
                            item={menuItem}
                        />
                    ) : (
                        <SidebarItemCollapse
                            key={`menuIndex${menuItem.id}`}
                            item={menuItem}
                        />
                    )
                )}
            </ul>
        </div>
    ));
};

export default SidebarAdmin;
