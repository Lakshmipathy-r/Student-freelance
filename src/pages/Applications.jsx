import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Applications = () => {
  const applications = [
    { id: 1, title: 'UI/UX Design for Mobile App', company: 'Tech Co.', status: 'pending', date: 'Jan 15, 2025', budget: '₹20,000' },
    { id: 2, title: 'Web Development Project', company: 'StartupXYZ', status: 'accepted', date: 'Jan 10, 2025', budget: '₹35,000' },
    { id: 3, title: 'Content Writing', company: 'Media Inc.', status: 'rejected', date: 'Jan 5, 2025', budget: '₹5,000' },
  ];

  const statusColors = {
    pending: 'status-pending',
    accepted: 'status-accepted',
    rejected: 'status-rejected',
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-text-primary mb-2">My Applications</h1>
            <p className="text-text-secondary mb-8">Track your submitted proposals</p>

            <div className="space-y-4">
              {applications.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-secondary border border-border rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1">{app.title}</h3>
                      <p className="text-text-secondary">{app.company}</p>
                    </div>
                    <span className={`status-badge ${statusColors[app.status]}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-text-secondary">
                      Applied: {app.date} | Budget: {app.budget}
                    </div>
                    <button className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:opacity-90">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Applications;
