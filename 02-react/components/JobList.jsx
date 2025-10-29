import { jobs } from "../src/data.js";
import { DevJobsPaginacion } from "./DevJobsPaginacion.jsx";
import { JobCard } from "./JobCard.jsx";
export const JobList = () => {
    return (
        <>
            <div className="jobs-listing">
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
            <DevJobsPaginacion numPags={5} paginaActual={1} />
        </>
    );
};
