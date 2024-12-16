import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetail = () => {
    const { _id, title, company, applicationDeadline } = useLoaderData();

    console.log(`${title}`);
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>job details for {title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetail;