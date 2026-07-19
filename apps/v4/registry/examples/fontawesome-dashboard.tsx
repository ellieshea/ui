"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faUsers,
  faCog,
  faHome,
  faBell,
  faSearch,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/registry/bases/radix/ui/button'

export function FontAwesomeDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHome} className="h-6 w-6" />
            <span className="text-lg font-bold">Dashboard</span>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {[
            { icon: faHome, label: 'Home' },
            { icon: faChartBar, label: 'Analytics' },
            { icon: faUsers, label: 'Users' },
            { icon: faCog, label: 'Settings' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-gray-50 rounded-lg outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faBell} className="h-5 w-5 cursor-pointer hover:text-blue-500" />
            <Button variant="ghost" size="sm">
              <FontAwesomeIcon icon={faSignOut} className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Total Users', value: '2,543', icon: faUsers, color: 'bg-blue-500' },
              { title: 'Revenue', value: '$42,564', icon: faChartBar, color: 'bg-green-500' },
              { title: 'Growth', value: '+14.2%', icon: faChartBar, color: 'bg-purple-500' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{card.title}</p>
                    <p className="text-2xl font-bold mt-2">{card.value}</p>
                  </div>
                  <div className={`${card.color} p-3 rounded-lg text-white`}>
                    <FontAwesomeIcon icon={card.icon} className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
