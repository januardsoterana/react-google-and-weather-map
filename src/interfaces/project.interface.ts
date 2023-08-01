interface IProjectProps {
    projectId: string
}

interface IProject {
    project_id: string;
    project_name: string;
    location: IProjectLocation;
}

interface IProjectLocation {
    latitude: number;
    longitude: number;
    country_code: string;
    city: string;
    project_id: string;
}

interface ICurrentWeather {
    description: string;
    icon: string;
    temp: number;
    wind: number;
}

interface IDailyForecastItem {
    dt: number;
    dt_txt: string;
    icon: string;
    temp_max: number;
    temp_min: number;
}
