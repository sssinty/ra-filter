import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import {projects} from './projects';

const Portfolio = () => {
  const [state, setState] = useState('All');
  const [date, setDate] = useState(projects);

  const projectFilter = (selected) => {
    setState(selected);

    const dataFilter = projects.filter((e) => {
      if(e.category === selected) {
        return e
      }
    });

    setDate(dataFilter);

    if(selected === 'All') {
      setDate(projects);
    }
  }

  return (
    <>
      <div className='flex justify-normal items-center'>
        <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} selected={state} onSelectFilter={(filter) => {projectFilter(filter)}}/>
      </div>
      <div className='h-56 grid grid-cols-3 gap-4 content-stretch'>
        <ProjectList date={date}/>
      </div>
    </>
  )
}

export default Portfolio;