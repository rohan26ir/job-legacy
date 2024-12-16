import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>


      <div className='w-11/12 my-10 mx-auto'>
        <HotJobs></HotJobs>
      </div>

    </div>
  );
};

export default Home;<h2>This is home</h2>