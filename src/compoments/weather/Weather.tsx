interface IWeatherWidgetProps {
    project: IProject,
    current: ICurrentWeather,
    daily: IDailyForecastItem[],
}

interface IDailyForecastWidgetProps {
    data: IDailyForecastItem
}


const formatDateTime = (inputDateTime: string) => {
    const dateObj = new Date(inputDateTime);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    return `${month}/${day} ${hour}:${minute.toString().padStart(2, '0')}`;
}

const DailyForecastWidget = (props: IDailyForecastWidgetProps) => {
    return (
        <div className="max-w-min ml-2 mr-2">
            <div>{formatDateTime(props.data.dt_txt)}</div>
            <div className="flex justify-center">
                <img
                    src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${props.data.icon}.png`}
                    width="64"
                    height="64"
                />
            </div>
            <div>{Math.round(props.data.temp_max)}°</div>
            <div>{Math.round(props.data.temp_min)}°</div>
        </div>
    )
}


const WeatherWidget = (props: IWeatherWidgetProps) => {
    const {project, current, daily} = props;
    return (
        <div className="text-black">
            <div className="flex bg-white p-2">
                <div className="flex items-center">
                    <h2 className="text-center mt-2 mb-2">
                        Weather for {project.location.city}, {project.location.country_code}
                    </h2>
                </div>
            </div>
            <hr />
            <div className="flex bg-white">
                <div className="w-1/3">
                    <div className="flex align-middle">
                        <div className="w-1/2 flex justify-center">
                            <img
                                src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${current.icon}.png`}
                                width="128"
                                height="128"
                            />
                        </div>
                        <div className="w-1/2 items-center flex justify-center">
                            <p className="text-3xl sm:text-7xl">{Math.round(current.temp)}°C</p>
                        </div>
                    </div>
                    <h2 className="capitalize">{current.description}</h2>
                    <small>Wind: {current.wind} m/s</small>
                </div>
                <div className="w-2/3">
                    <div className="flex overflow-auto">
                        {daily.map(item => (
                            <DailyForecastWidget data={item} key={item.dt} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;
