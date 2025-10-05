import React from 'react'

const BaseTemplate = () => {
  return (
    <div className='min-h-screen flex flex-row bg-gray-900 text-gray-100'> 
        <aside className='w-48 bg-gray-800 p-2 border-gray-700 border-r shadow-lg shadow-black'>
            <div className='text-xs font-bold mb-4 border rounded-lg p-1 border-gray-700 bg-gray-900 text-center'>Dhall Mill's ERP System</div>
            <nav className='p-2 text-sm'>
                <ul>
                    <li className='mb-2 flex flex-row justify-start items-center gap-4'><i className="bi bi-house text-xl"></i>Dashboard</li>
                    <li className='mb-2 flex flex-row justify-start items-center gap-4'><i className="bi bi-info-circle text-xl"></i>Transactions</li>
                    <li className='mb-2 flex flex-row justify-start items-center gap-4'><i className="bi bi-briefcase text-xl"></i>Reports</li>
                    <li className='mb-2 flex flex-row justify-start items-center gap-4'><i className="bi bi-envelope text-xl"></i>Tools</li>
                </ul>
            </nav>
        </aside>

        <main className='flex-grow p-6'>
            <h1 className='text-3xl font-bold mb-6'>Main Content Area</h1>
            <p>This is where the main content will go.</p>
        </main>
        <footer className='bg-gray-800 p-4 text-center'>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>

    </div>
  )
}

export default BaseTemplate