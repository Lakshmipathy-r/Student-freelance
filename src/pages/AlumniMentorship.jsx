import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AlumniMentorship = () => {
  const mentors = [
    { id: 1, name: 'Sarah Kumar', role: 'Senior PM @ Google', grad: 'SRMIST \'20', rating: 4.9, mentees: 50, expertise: 'Product Management, Career Growth' },
    { id: 2, name: 'Ravi Mehta', role: 'Software Architect @ Microsoft', grad: 'SRMIST \'18', rating: 4.8, mentees: 45, expertise: 'System Design, Architecture' },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-text-primary mb-2">Alumni Mentorship</h1>
            <p className="text-text-secondary mb-8">Connect with experienced alumni for guidance</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-primary-secondary border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl">
                      👨‍💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary">{mentor.name}</h3>
                      <p className="text-text-secondary text-sm">{mentor.role}</p>
                      <p className="text-text-secondary text-xs">{mentor.grad}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-text-secondary">{mentor.rating} ({mentor.mentees}+ mentees)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">Expertise: {mentor.expertise}</p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-accent-primary text-white py-2 rounded-lg hover:opacity-90">Request Mentorship</button>
                    <button className="px-4 py-2 bg-primary-bg border border-border rounded-lg text-text-secondary hover:border-accent-primary">View Profile</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary-secondary border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">Upcoming Sessions</h2>
              <div className="flex items-center justify-between p-4 bg-primary-bg rounded-lg">
                <div>
                  <div className="font-semibold text-text-primary">Career Guidance Session</div>
                  <div className="text-sm text-text-secondary">with Ravi Mehta (Software Architect)</div>
                </div>
                <div className="flex items-center space-x-2 text-accent-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Feb 20, 3:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AlumniMentorship;
