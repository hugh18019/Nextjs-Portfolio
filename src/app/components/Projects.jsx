'use client';
import React, { useState } from 'react';
import { ProjectsData } from '../config/texts';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const Projects = () => {
  const [active, setActive] = useState('All');
  const [display, setDisplay] = useState(
    Array(ProjectsData.length)
      .fill(true)
      .map((el) => el)
  );
  const onClick = (name) => {
    setActive(name);
    setDisplay(filter(name));
  };

  const filter = (tag) =>
    ProjectsData.map((project) =>
      project.tags
        .filter((t) => t === tag)
        .reduce((_, t) => (t === tag ? true : false), false)
    );

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-black mt-8'>
        My Projects
      </h2>
      <div className='w-full flex flex-row justify-center items-center text-black gap-2 py-6'>
        <ProjectTag
          name={'All'}
          onClick={onClick}
          isSelected={active === 'All'}
        />
        <ProjectTag
          name={'Web'}
          onClick={onClick}
          isSelected={active === 'Web'}
        />
        <ProjectTag
          name={'Python'}
          onClick={onClick}
          isSelected={active === 'Python'}
        />
      </div>
      <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
        {ProjectsData.map((project, i) => (
          <ProjectCard
            key={i}
            visible={display[i]}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
