import LocationOnIcon from '@mui/icons-material/LocationOn';
import './App.css';
export default function Trip(props) {
	const {
		description,
		endDate,
		googleMapsUrl,
		imageUrl,
		location,
		startDate,
		title,
	} = props;
	return (
		<>
			<div className="trip--div">
				<div className="trip--image">
					<img src={imageUrl} alt="location" />
				</div>
				<div className="trip--info">
					<div className="location-top">
						<LocationOnIcon />
						<h4>{location}</h4>
						<a href={googleMapsUrl} target="_blank" rel="noreferrer">
							View on Google Maps
						</a>
					</div>
					<h2 className="location-title">{title}</h2>
					<p className="location-dates">
						{startDate} - {endDate}
					</p>
					<p className="location-desc">{description}</p>
				</div>
				<hr />
			</div>
		</>
	);
}
