import React from 'react';
import {TabPanel} from "@wordpress/components";

export const MainMenu = ({className,onSelect}) => {
    return(
        <TabPanel className={className}
                  activeClass="active-tab"
                  onSelect={onSelect}
                  tabs={[
                      {
                          name: 'forms',
                          title: 'Forms',
                      },
                      {
                          name: 'entries',
                          title: 'Entries',
                      },
                      {
                          name: 'settings',
                          title: 'Setting',
                      },
                      {
                          name: 'documentation',
                          title: 'Documentation',
                      },
                      {
                          name: 'account',
                          title: 'Account',
                      },
                  ]}
        >
            {
                (tab) => (
                    <div
                    >
                        {tab.name}
                    </div>
                )
            }
        </TabPanel>
    );

}
