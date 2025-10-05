import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import Loggin from './Loggin';

const BaseTemplate = () => {
  const { api, loggedIn } = useContext(AuthContext);

  const menuItems = {
    dashboard: { icon: 'bi-house', label: 'Dashboard' },
    transactions: {
      icon: 'bi-arrow-left-right',
      label: 'Transactions',
      submenu: [
        { label: 'Goods Receipt', link: '/transactions/goods-receipt' },
        { label: 'Delivery Challan', link: '/transactions/delivery-challan' },
        { label: 'Postdated Cheques', link: '/transactions/postdated-cheques' },
        { label: 'Orid Production', link: '/transactions/orid-production' },
        { label: 'Toor Production', link: '/transactions/toor-production' },
        { label: 'Moong Production', link: '/transactions/moong-production' },
        { label: 'Packing Materials Inventory', link: '/transactions/packing-materials-inventory' },
        { label: 'Bank Reconciliation', link: '/transactions/bank-reconciliation' },
        { label: 'Commission Calculator', link: '/transactions/commission-calculator' },
        { label: 'Fixed Asset Register', link: '/transactions/fixed-asset-register' },
      ],
    },
    pms: {
      icon: 'bi-people',
      label: 'Payroll Management System',
      submenu: [
        { label: 'Employee Register', link: '/pms/employee-register' },
        { label: 'Attendance Register', link: '/pms/attendance-register' },
        { label: 'Pay Slips', link: '/pms/pay-slips' },
      ],
    },
    reports: {
      icon: 'bi-card-checklist',
      label: 'Reports',
      submenu: [
        { label: 'Sales Report', link: '/reports/sales' },
        { label: 'Purchase Report', link: '/reports/purchases' },
        { label: 'Inventory Report', link: '/reports/inventory' },
      ],
    },
    tools: { icon: 'bi-tools', label: 'Tools' },
  };

  const [showSubmenuOf, setShowSubmenuOf] = React.useState(null);

  if (!loggedIn) {
    return <Loggin />;
  }

  return (
    <div className="min-h-screen flex flex-row bg-gray-900 text-gray-100">
      <aside className="flex flex-col items-center w-80 h-screen bg-gray-800 p-0 border-gray-600 border-r shadow-lg shadow-black">
        <div className="text-sm w-[90%] font-bold mb-4 mt-4 border rounded-lg p-1 border-gray-600 bg-gray-900 text-center">
          Dhall Mill's ERP System
        </div>
        <nav className="text-sm w-[90%] flex-grow">
          <ul className="border rounded border-gray-600 shadow-lg shadow-black/40">
            {Object.entries(menuItems).map(([key, item]) => (
              <React.Fragment key={key}>
                <li
                  className={`border-gray-600 p-1 ps-4 last:rounded-b first:rounded-t border-t first:border-t-0 ${showSubmenuOf === item.label ? ' not-first:border-b last:border-b-0 last:rounded-b bg-gray-900' : 'hover:bg-gray-700'}`}
                >
                  <div
                    className="flex flex-row justify-start items-center gap-4 font-bold cursor-pointer"
                    onClick={() => setShowSubmenuOf(showSubmenuOf === item.label ? null : item.label)}
                  >
                    <i className={`bi ${item.icon} text-xl`}></i>
                    {item.label}
                  </div>
                </li>
                {item.submenu && (
                  <ul className={`${showSubmenuOf === item.label ? 'block' : 'hidden'}`}>
                    {item.submenu.map((subItem, index) => (
                      <li
                        key={index}
                        className="flex flex-row gap-3 ps-12 py-1 hover:bg-gray-950 hover:cursor-pointer text-sm"
                      >
                        <i className="bi bi-arrow-right-short"></i>
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="border-t border-gray-600 mt-auto w-full ps-3 pb-3 pt-2 pe-2">
          <p className="text-sm">Footer Content</p>
        </div>
      </aside>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Main Content Area</h1>
        <p>This is where the main content will go.</p>
      </main>
    </div>
  );
};

export default BaseTemplate;
