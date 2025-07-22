import React from 'react';
import { experienceData } from '../data';

function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
        <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-[#f8f8f9]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-[#111439] lg:sr-only">Experience</h2></div>
        <div>
            <ol className="group/list">
            {experienceData.map((job, index) => (
                <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[#5B5F7E] sm:col-span-2" aria-label={job.date}>{job.date}</header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-[#111439]">
                                <span>{job.title}</span><span className="text-[#5B5F7E]"> · </span><span>{job.company}</span>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{job.description}</p>
                            {job.technologies.length > 0 && (
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {job.technologies.map((tech, i) => (
                                    <li key={i} className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#6772e5]/10 px-3 py-1 text-xs font-medium leading-5 text-[#6772e5]">{tech}</div></li>
                                ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </li>
            ))}
            </ol>
            <div className="mt-12"><a className="group inline-flex items-center font-semibold leading-tight text-[#111439]" aria-label="View Full Résumé" href="/resume.pdf"><span><span className="border-b border-transparent pb-px transition group-hover:border-[#6772e5] motion-reduce:transition-none">View Full Resume</span><span className="whitespace-nowrap"><span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span></span></span></a></div>
        </div>
    </section>
  );
}
export default Experience;