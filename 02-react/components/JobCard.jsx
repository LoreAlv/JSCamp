import { useState } from "react";

export const JobCard = ({ job }) => {
    // extraemos las propiedades del objeto job
    const { title, company, location, salary, description, tags, contract, experience } = job;
    const [isApplied, setIsApplied] = useState(false);

    const buttonClasses = `jobApplybtn ${isApplied ? "is-applied" : ""}`;
    const textBtn = isApplied ? "Aplicado" : "Aplicar";
    const handleClick = () => {
        setIsApplied(!isApplied);
    };

    return (
        <article
            className="job-listing-card"
            data-ubicacion={location?.toLowerCase()}
            data-tecnologia={tags?.map((tech) => tech.toLowerCase()).join(", ")}
            data-contrato={contract?.toLowerCase().replace(" ", "-")}
            data-experiencia={experience?.toLowerCase().replace(" ", "-")}>
            <header className="job-card-header">
                <h3 className="job-title">{title}</h3>
                <p className="job-company">{company}</p>
            </header>
            <div className="job-card-body">
                <p className="job-location">📍 {location}</p>
                <p className="job-salary">💰 {salary}</p>
                <p className="job-description">{description}</p>
            </div>
            <footer className="job-card-footer">
                <span className="job-tags">{tags?.join(", ")}</span>
                <button className={buttonClasses} disabled={isApplied} onClick={handleClick}>
                    {textBtn}
                </button>
            </footer>
        </article>
    );
};
