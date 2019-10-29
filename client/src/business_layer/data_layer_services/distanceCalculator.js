


const WASH_DC_LON_LAT= {
  Latitude: 38.89511,
	Longitude: -77.03637
};

const getLonAndLat =(ipResult)=>{
  return{
  Latitude: ipResult.latitude,
	Longitude: ipResult.longitude
  }
};

const toRad=(v)=>( v * (Math.PI / 180));
const kmToMiles =(km)=>(km * 0.62137).toFixed(2);

const  haversine =(l1, l2)=>{
	const R = 6371; // km
	const x1 = l2.Latitude-l1.Latitude;
	const dLat = toRad(x1);
	const x2 = l2.Longitude-l1.Longitude;
	const dLon = toRad(x2);
	const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(toRad(l1.Latitude)) * Math.cos(toRad(l2.Latitude)) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	return (R * c);
};

export  const getDistanceInMiles =(ipResult) => (
        kmToMiles(haversine(WASH_DC_LON_LAT,
                 getLonAndLat(ipResult))));

