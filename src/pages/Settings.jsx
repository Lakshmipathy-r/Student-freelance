import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-text-primary mb-8">Settings</h1>
            <div className="space-y-6">
              <div className="bg-primary-secondary border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-text-primary mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-primary-bg border border-border rounded-lg text-text-primary" defaultValue="student@institution.edu" />
                  </div>
                  <button className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:opacity-90">Save Changes</button>
                </div>
              </div>
              <div className="bg-primary-secondary border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-text-primary mb-4">Notification Preferences</h2>
                <div className="space-y-3">
                  {['Email notifications', 'Push notifications', 'SMS alerts'].map((pref) => (
                    <label key={pref} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-border bg-primary-bg" defaultChecked />
                      <span className="text-text-primary">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
