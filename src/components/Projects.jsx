import React from 'react';
import { projectsData, noteworthyProjectsData } from '../data';
import { FolderIcon, ExternalLinkIcon } from './Icons';

function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
        <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-[#f8f8f9]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-[#111439] lg:sr-only">Projects</h2></div>
        <div>
            <ul className="group/list">
                {projectsData.map((project, index) => (
                    <li key={index} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-2.5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3><a className="inline-flex items-baseline font-medium leading-tight text-[#111439] hover:text-[#6772e5] focus-visible:text-[#6772e5] group/link text-base" href={project.link} target="_blank" rel="noreferrer"><span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>{project.title}</span></a></h3>
                                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i} className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#6772e5]/10 px-3 py-1 text-xs font-medium leading-5 text-[#6772e5]">{tech}</div></li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                            <img alt={project.title} loading="lazy" width="200" height="48" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={project.imageUrl} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
        <h2 className="mt-24 mb-4 text-lg font-semibold text-[#111439]">Other Noteworthy Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {noteworthyProjectsData.map((project, index) => (
                <a href={project.link} target="_blank" rel="noreferrer" key={index} className="p-6 rounded-md shadow-lg project-card group">
                    <div className="flex justify-between items-center mb-4 text-[#5B5F7E] group-hover:text-[#6772e5] transition-colors">
                        <FolderIcon />
                        <ExternalLinkIcon />
                    </div>
                    <h3 className="text-[#111439] font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 text-[#5B5F7E]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#5B5F7E]">
                        {project.technologies.map((tech, i) => (
                            <span key={i}>{tech}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
        <div className="mt-12"><a className="group inline-flex items-center font-semibold leading-tight text-[#111439]" aria-label="View Full Project Archive"  target="_blank" href="https://github.com/rahat57ali?tab=repositories"><span><span className="border-b border-transparent pb-px transition group-hover:border-[#6772e5] motion-reduce:transition-none">View Full Project Archive</span><span className="whitespace-nowrap"><span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span></span></span></a></div>
    </section>
  );
}

export default Projects;