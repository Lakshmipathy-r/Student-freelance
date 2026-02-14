import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Briefcase, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuthStore } from '../store/authStore';

const Profile = () => {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-gradient-primary h-48 rounded-t-xl"></div>
            <div className="bg-primary-secondary border border-border rounded-b-xl -mt-16 p-6">
              <div className="flex items-end space-x-6 mb-6">
                <div className="w-32 h-32 bg-gradient-primary rounded-full border-4 border-primary-secondary flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-text-primary mb-2">{user?.name || 'Lakshmipathy R'}</h1>
                  <p className="text-text-secondary mb-3">Full Stack Developer</p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Chennai, India</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{user?.email}</span>
                    </span>
                    <span className="flex items-center space-x-1">⭐ 4.8 (24 reviews)</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:opacity-90">
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-bg border border-border rounded-lg p-4 text-center">
                  <Briefcase className="w-8 h-8 mx-auto mb-2 text-accent-primary" />
                  <div className="text-2xl font-bold text-text-primary">12</div>
                  <div className="text-sm text-text-secondary">Projects Completed</div>
                </div>
                <div className="bg-primary-bg border border-border rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-accent-secondary" />
                  <div className="text-2xl font-bold text-text-primary">100%</div>
                  <div className="text-sm text-text-secondary">Success Rate</div>
                </div>
                <div className="bg-primary-bg border border-border rounded-lg p-4 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-status-success" />
                  <div className="text-2xl font-bold text-text-primary">2 years</div>
                  <div className="text-sm text-text-secondary">Member Since</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-3">About</h2>
                  <p className="text-text-secondary">
                    Passionate MERN stack developer with expertise in building scalable web applications. 
                    I love creating clean, efficient code and beautiful user interfaces.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-3">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind CSS', 'Git'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-accent-primary bg-opacity-20 text-accent-primary rounded-lg border border-accent-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-3">Education</h2>
                  <div className="bg-primary-bg border border-border rounded-lg p-4">
                    <div className="font-semibold text-text-primary">B.Tech - Computer Science Engineering</div>
                    <div className="text-text-secondary">SRM Institute of Science and Technology</div>
                    <div className="text-sm text-text-secondary">Expected Graduation: 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
