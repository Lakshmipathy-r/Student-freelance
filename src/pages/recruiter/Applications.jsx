import React from 'react';
import { motion } from 'framer-motion';
import { Users, Filter, Download, MessageSquare, Check, X, Eye } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const RecruiterApplications = () => {
  const applicants = [
    { 
       id: 1, 
       name: 'Alex Chen', 
       role: 'React Developer', 
       job: 'Frontend Engineer',
       match: '98%', 
       status: 'Pending', 
       date: '2 hours ago',
       avatar: 'A'
    },
    { 
       id: 2, 
       name: 'Sarah Jones', 
       role: 'UI/UX Designer', 
       job: 'Product Designer',
       match: '85%', 
       status: 'Reviewing', 
       date: '5 hours ago',
       avatar: 'S'
    },
    { 
       id: 3, 
       name: 'Mike Ross', 
       role: 'Backend Engineer', 
       job: 'Backend API Dev',
       match: '92%', 
       status: 'Interview', 
       date: '1 day ago',
       avatar: 'M'
    },
    { 
       id: 4, 
       name: 'Jessica Lee', 
       role: 'Full Stack Dev', 
       job: 'Frontend Engineer',
       match: '75%', 
       status: 'Rejected', 
       date: '2 days ago',
       avatar: 'J'
    },
  ];

  return (
    <div className="min-h-screen bg-background font-mono selection:bg-primary selection:text-black">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-10 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative z-10 mb-8">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2 flex items-center gap-3">
               <Users className="w-8 h-8 text-primary" />
               Applicant_Common
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <p className="text-text-muted text-sm border-l-2 border-primary pl-4">
                  Manage incoming talent protocols.
               </p>
               <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-black text-xs text-white uppercase tracking-wider hover:border-primary transition-colors">
                     <Filter className="w-3 h-3" /> Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-black text-xs text-white uppercase tracking-wider hover:border-primary transition-colors">
                     <Download className="w-3 h-3" /> Export_CSV
                  </button>
               </div>
            </div>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 gap-4">
             {applicants.map((applicant, index) => (
                <motion.div
                   key={applicant.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="bg-surface border border-white/10 p-6 hover:border-primary/50 transition-all group"
                >
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold text-white border border-white/20">
                            {applicant.avatar}
                         </div>
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{applicant.name}</h3>
                               <span className={`text-[10px] px-2 py-0.5 border rounded-full uppercase tracking-wider
                                  ${applicant.status === 'Pending' ? 'text-yellow-500 border-yellow-500/30' : 
                                    applicant.status === 'Interview' ? 'text-blue-500 border-blue-500/30' : 
                                    applicant.status === 'Rejected' ? 'text-red-500 border-red-500/30' :
                                    'text-green-500 border-green-500/30'}
                               `}>
                                  {applicant.status}
                               </span>
                            </div>
                            <p className="text-text-muted text-xs font-mono">Applied for: <span className="text-white">{applicant.job}</span></p>
                         </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                         <div className="text-right hidden md:block">
                            <div className="text-primary font-bold text-lg">{applicant.match}</div>
                            <div className="text-[10px] text-text-muted uppercase tracking-wider">AI_Match_Score</div>
                         </div>
                         
                         <div className="flex items-center gap-2">
                            <Link to={`/applicant/${applicant.id}`} className="p-2 border border-white/10 text-white hover:bg-white/10 transition-colors" title="View Profile">
                               <Eye className="w-4 h-4" />
                            </Link>
                            <button className="p-2 border border-white/10 text-white hover:bg-white/10 transition-colors" title="Message">
                               <MessageSquare className="w-4 h-4" />
                            </button>
                            <button className="p-2 border border-green-500/30 text-green-500 hover:bg-green-500/10 transition-colors" title="Shortlist">
                               <Check className="w-4 h-4" />
                            </button>
                            <button className="p-2 border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors" title="Reject">
                               <X className="w-4 h-4" />
                            </button>
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default RecruiterApplications;
