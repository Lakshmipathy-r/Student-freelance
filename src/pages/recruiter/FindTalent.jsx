import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Star, Briefcase, Check, UserPlus, MessageSquare, ExternalLink } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const FindTalent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, available

  // Mock Data - strict typing emulation
  const initialTalent = [
    {
      id: 1,
      name: "Alex Chen",
      role: "React Developer",
      skills: ["React", "Node.js", "TypeScript"],
      status: "Active",
      availability: "Free",
      rating: 4.8,
      location: "San Francisco, CA",
      hourlyRate: "$45/hr",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Jones",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Tailwind"],
      status: "Active",
      availability: "Busy",
      rating: 4.9,
      location: "New York, NY",
      hourlyRate: "$55/hr",
      verified: true
    },
    {
      id: 3,
      name: "Mike Ross",
      role: "Backend Engineer",
      skills: ["Python", "Django", "PostgreSQL"],
      status: "Offline",
      availability: "Free",
      rating: 4.5,
      location: "Austin, TX",
      hourlyRate: "$60/hr",
      verified: false
    },
    {
      id: 4,
      name: "Emily Wong",
      role: "Full Stack Dev",
      skills: ["MERN", "AWS", "Docker"],
      status: "Active",
      availability: "Free",
      rating: 5.0,
      location: "Remote",
      hourlyRate: "$70/hr",
      verified: true
    },
    {
      id: 5,
      name: "David Kim",
      role: "Mobile Developer",
      skills: ["Flutter", "Dart", "Firebase"],
      status: "Active",
      availability: "Free",
      rating: 4.7,
      location: "Seattle, WA",
      hourlyRate: "$50/hr",
      verified: true
    }
  ];

  const filteredTalent = initialTalent.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === 'active') return matchesSearch && student.status === 'Active';
    if (filter === 'available') return matchesSearch && student.availability === 'Free';
    return matchesSearch;
  });

  const handleInvite = (name) => {
    // In a real app, this would trigger an API call
    alert(`Invitation sent to ${name} successfully!`);
  };

  return (
    <div className="min-h-screen bg-background font-mono selection:bg-primary selection:text-black">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-10 relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative z-10"
           >
             <header className="mb-8">
               <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                 Find_Talent <span className="text-primary">.exe</span>
               </h1>
               <p className="text-text-muted text-sm max-w-2xl">
                 Access the global database of verified student freelancers. 
                 Filter by availability and status to find the perfect match for your protocol.
               </p>
             </header>

             {/* Search and Filter Controls */}
             <div className="flex flex-col md:flex-row gap-4 mb-8">
               <div className="relative flex-1 group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Search by name, role, or skill..." 
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full bg-surface border border-white/10 py-3 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                 />
               </div>
               
               <div className="flex gap-2">
                 <button 
                   onClick={() => setFilter('all')}
                   className={`px-4 py-3 border uppercase tracking-wider text-xs font-bold transition-all ${filter === 'all' ? 'bg-white text-black border-white' : 'bg-transparent text-text-muted border-white/10 hover:border-white'}`}
                 >
                   All_Nodes
                 </button>
                 <button 
                   onClick={() => setFilter('active')}
                   className={`px-4 py-3 border uppercase tracking-wider text-xs font-bold transition-all ${filter === 'active' ? 'bg-green-500/10 text-green-500 border-green-500' : 'bg-transparent text-text-muted border-white/10 hover:border-green-500/50'}`}
                 >
                   Active_Only
                 </button>
                 <button 
                   onClick={() => setFilter('available')}
                   className={`px-4 py-3 border uppercase tracking-wider text-xs font-bold transition-all ${filter === 'available' ? 'bg-blue-500/10 text-blue-500 border-blue-500' : 'bg-transparent text-text-muted border-white/10 hover:border-blue-500/50'}`}
                 >
                   Available_Now
                 </button>
               </div>
             </div>

             {/* Talent Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {filteredTalent.map((student, index) => (
                 <motion.div
                   key={student.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="bg-surface border border-white/10 p-6 group hover:border-primary/50 transition-all relative overflow-hidden flex flex-col"
                 >
                   {/* Status Indicator */}
                   <div className="absolute top-0 right-0 p-3 flex gap-2">
                      <span className={`w-2 h-2 rounded-full ${student.status === 'Active' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-gray-500'}`} />
                   </div>

                   <div className="flex items-start gap-4 mb-4">
                     <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-xl font-bold text-white border border-white/10 group-hover:border-primary group-hover:text-primary transition-colors">
                        {student.name.charAt(0)}
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{student.name}</h3>
                        <p className="text-secondary text-xs uppercase tracking-wider mb-1">{student.role}</p>
                        <div className="flex items-center gap-2 text-[10px] text-text-muted">
                           <MapPin className="w-3 h-3" /> {student.location}
                        </div>
                     </div>
                   </div>

                   <div className="mb-4 flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {student.skills.slice(0, 3).map(skill => (
                          <span key={skill} className="px-2 py-1 bg-white/5 text-[10px] text-text-muted border border-white/10 uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                        {student.skills.length > 3 && (
                          <span className="px-2 py-1 text-[10px] text-text-muted border border-white/10 uppercase tracking-wider">+{student.skills.length - 3}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs border-t border-white/10 pt-4">
                         <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="font-bold">{student.rating}</span>
                         </div>
                         <div className="text-white font-mono">{student.hourlyRate}</div>
                         <div className={`px-2 py-0.5 border ${student.availability === 'Free' ? 'border-green-500/30 text-green-500' : 'border-red-500/30 text-red-500'} text-[10px] uppercase`}>
                            {student.availability}
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-2 mt-auto">
                      <button 
                        onClick={() => handleInvite(student.name)}
                        className="flex-1 py-2 bg-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
                      >
                         <UserPlus className="w-3 h-3" /> Invite
                      </button>
                      <Link 
                        to={`/applicant/${student.id}`}
                        className="flex-1 py-2 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                      >
                         Profile <ExternalLink className="w-3 h-3" />
                      </Link>
                   </div>

                 </motion.div>
               ))}
             </div>
             
             {filteredTalent.length === 0 && (
               <div className="text-center py-20 border border-white/10 bg-white/5 border-dashed">
                  <p className="text-text-muted uppercase tracking-widest">No_Nodes_Found</p>
                  <button onClick={() => {setSearchTerm(''); setFilter('all');}} className="mt-4 text-primary hover:underline text-xs">Clear Filters</button>
               </div>
             )}

           </motion.div>
        </main>
      </div>
    </div>
  );
};

export default FindTalent;
