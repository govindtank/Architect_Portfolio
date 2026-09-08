import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Play, Sparkles, ArrowRight, Smartphone, ShieldCheck } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">// PROVEN_PRODUCTION_SYSTEMS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 italic">VAULT</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full font-mono text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>6 Production Mobile Apps</span>
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const redirectUrl = project.playStoreLink || project.link || "https://github.com/govindtank";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 350, damping: 20 } 
                }}
                className="group relative flex flex-col justify-between p-7 bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 hover:border-sky-500/40 rounded-3xl shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
              >
                {/* Subtle top inner glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header: App Logo Showcase & Verified Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-sky-400/40 via-emerald-400/20 to-transparent shadow-lg shadow-sky-500/10 group-hover:shadow-sky-500/25 transition-all">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e: any) => {
                            // Fallback if network icon fails
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        Play Store
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                        vProduction
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300/90 leading-relaxed mb-6 font-sans text-xs sm:text-sm line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Section: Tags & Play Store Button */}
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono tracking-tight px-2.5 py-0.5 rounded-md bg-slate-950 border border-white/10 text-slate-300 uppercase font-semibold group-hover:border-sky-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* High Contrast Direct Google Play Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} on Google Play Store`}
                    className="w-full py-3 px-4 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:via-teal-400 hover:to-sky-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Get on Google Play</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Catalog Link */}
        <div className="mt-16 flex justify-center">
           <motion.a 
             whileHover={{ scale: 1.03 }}
             href="https://play.google.com/store/apps/developer?id=Govind+Tank"
             target="_blank"
             rel="noopener noreferrer"
             className="px-8 py-5 glass-card border border-white/15 hover:border-emerald-400/40 flex items-center gap-3 group cursor-pointer bg-slate-900/50 rounded-2xl shadow-xl transition-all"
           >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono text-white group-hover:text-emerald-300 font-bold transition-colors uppercase tracking-widest">
                  EXPLORE_DEVELOPER_PORTFOLIO
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  View complete release catalog on Google Play
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-2" />
           </motion.a>
        </div>
      </div>
    </section>
  );
}
