import React, { useState, useEffect, useCallback } from 'react';
import { projectService } from '../services/project.service';
import GMap from '../compoments/map/GMap';
import WeatherWidget from '../compoments/weather/Weather';

function ProjectDetails(props: IProjectProps) {
    const [project, setProject] = useState<IProject | null>(null);
    const [current, setCurrent] = useState<ICurrentWeather | null>(null);
    const [daily, setDaily] = useState<IDailyForecastItem[]>([]);
    const [error, setError] = useState(null);
    const { projectId } = props;

    const getProject = useCallback(() => {
        return projectService
            .getProjectWeather(projectId)
            .then((response) => {
                setProject(response.data.project);
                setCurrent(response.data.current);
                setDaily(response.data.daily);
            })
            .catch((err) => {
                setError(err)
            })
    }, [projectId]);

    useEffect(() => {
        getProject().then();
    }, [getProject]);

    return (
        <>
            <div className="w-screen">
                <div>
                    {project && (
                        <GMap center={project.location} />

                    )}
                </div>
                <div>
                    {project && current && (
                        <WeatherWidget project={project} current={current} daily={daily} />
                    )}
                </div>

                {error && (
                    <div>{error}</div>
                )}
            </div>
        </>
    )
}

export default ProjectDetails;
