import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">
            THE <span className="text-sky-400 italic">VAULT</span>
          </h2>
          <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">// Selected_Works.v2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {PROJECTS.map((project, index) => {
            const redirectUrl = project.playStoreLink || project.link || "https://github.com/govindtank";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                className={cn(
                  "group system-card flex flex-col p-8 transition-all hover:border-sky-500/40 bg-slate-900/50 border border-white/10 rounded-2xl shadow-xl",
                  index === 0 ? "md:col-span-8 md:row-span-2" : "md:col-span-4",
                  index === 1 ? "md:col-span-4 md:row-span-2" : "",
                  index === 2 ? "md:col-span-6" : "",
                  index === 3 ? "md:col-span-6" : ""
                )}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-all">
                    <Play className="w-5 h-5 text-emerald-400 fill-emerald-400/20 group-hover:fill-emerald-400 transition-all" />
                  </div>
                  <div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on Google Play Store`}
                      className="px-4 py-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{project.playStoreLink ? 'Google Play' : 'View App'}</span>
                    </motion.a>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-sky-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 font-sans text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono tracking-tight px-2.5 py-1 rounded bg-slate-950 border border-white/10 text-slate-300 uppercase font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-56 w-full mt-auto bg-slate-950 rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-end gap-1 h-12">
                     {Array.from({length: 12}).map((_, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         whileInView={{ height: `${Math.random() * 100}%` }}
                         className="w-1.5 bg-sky-400/60 rounded-t"
                       />
                     ))}
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold bg-slate-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                     Play_Store: Verified
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-10 group-hover:opacity-20 transition-all duration-1000 pointer-events-none">
                    <Sparkles className="w-24 h-24 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
           <motion.a 
             whileHover={{ scale: 1.03 }}
             href="https://play.google.com/store/apps/developer?id=Govind+Tank"
             target="_blank"
             rel="noopener noreferrer"
             className="px-10 py-6 glass-card border-dashed border-white/20 flex flex-col items-center gap-2 group cursor-pointer bg-slate-900/40 rounded-2xl"
           >
              <span className="text-xs font-mono text-slate-300 group-hover:text-emerald-400 font-bold transition-colors uppercase tracking-widest">VIEW_ALL_GOOGLE_PLAY_APPS</span>
              <div className="h-px w-24 bg-white/10 group-hover:w-full transition-all" />
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
           </motion.a>
        </div>
      </div>
    </section>
  );
}
