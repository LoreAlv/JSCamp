import { useState } from "react";

export const JobCard = ({ job }) => {
    // extraemos las propiedades del objeto job
    const { title, company, location, salary, description, tags, data } = job;
    const [isApplied, setIsApplied] = useState(false);

    const textBtn = isApplied ? "Aplicado" : "Aplicar";
    const handleClick = () => {
        setIsApplied(!isApplied);
    };
    return (
        <article
            className="job-listing-card"
            data-ubicacion={data?.ubicacion?.toLowerCase()}
            data-tecnologia={data?.tecnologia?.map((tech) => tech.toLowerCase()).join(", ")}
            data-contrato={data?.contrato?.toLowerCase().replace(" ", "-")}
            data-experiencia={data?.experiencia?.toLowerCase().replace(" ", "-")}>
            <header className="job-card-header">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
            </header>
            <div className="job-card-body">
                <p className="job-location">📍 {job.location}</p>
                <p className="job-salary">💰 {job.salary}</p>
                <p className="job-description">{job.description}</p>
            </div>
            <footer className="job-card-footer">
                <span className="job-tags">{job.tags.join(", ")}</span>
                <button className={`jobApplybtn ${isApplied ? "is-applied" : ""}`} disabled={isApplied} onClick={handleClick}>
                    {textBtn}
                </button>
            </footer>
            {/* 
            <h3 className="jobTible">{title}</h3>
            <p className="jobCompany">
                {company} | 📍{location}
            </p>
            <button className={`jobApplybtn ${isApplied ? "is-applied" : ""}`} disabled={isApplied} onClick={handleClick}>
                {textBtn}
            </button>
            <p className="jobDescription">{description}</p> */}
        </article>
    );
};
