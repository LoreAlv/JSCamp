import { useState } from "react";

export const JobCard = ({ job }) => {
    const { titulo, empresa, ubicacion, salario, descripcion, tags, data } = job;
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
            <h3 className="jobTible">{titulo}</h3>
            <p className="jobCompany">
                {empresa} | {ubicacion}
            </p>
            <button className={`jobApplybtn ${isApplied ? "is-applied" : ""}`} disabled={isApplied} onClick={handleClick}>
                {textBtn}
            </button>
            <p className="jobDescription">{descripcion}</p>
        </article>
    );
};
