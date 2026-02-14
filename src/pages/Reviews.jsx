import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Reviews = () => {
  const reviews = [
    { id: 1, rating: 5, reviewer: 'Tech Innovations Ltd.', project: 'E-commerce Website', comment: 'Excellent work! Very professional...', date: 'Jan 10, 2025' },
    { id: 2, rating: 4, reviewer: 'StartupXYZ', project: 'Mobile App Design', comment: 'Great designer, delivered on time.', date: 'Jan 5, 2025' },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-text-primary mb-8">Reviews & Ratings</h1>
            <div className="bg-primary-secondary border border-border rounded-xl p-8 mb-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-text-primary mb-2">4.8</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-text-secondary'}`} />
                  ))}
                </div>
                <div className="text-text-secondary">Based on 24 reviews</div>
              </div>
            </div>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-primary-secondary border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-text-secondary'}`} />
                        ))}
                      </div>
                      <div className="font-semibold text-text-primary">{review.reviewer}</div>
                      <div className="text-sm text-text-secondary">{review.project}</div>
                    </div>
                    <div className="text-sm text-text-secondary">{review.date}</div>
                  </div>
                  <p className="text-text-primary">{review.comment}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Reviews;
