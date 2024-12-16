import { useScroll } from 'motion/react';
import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(data => setJobs(data))

  } ,[])


  return (
    <div>

      <h2 className='text-4xl font-bold my-5'>Hot Jobs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;