import React, { useEffect } from 'react';

const Geolocation = ({ onCityChange }) => {
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    function success(position) {
      reverseGeocode(position.coords.latitude, position.coords.longitude);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
    } else {
      onCityChange("Kavali"); // Default to Kavali if geolocation is not supported
    }
  };

  const reverseGeocode = (latitude, longitude) => {
    const apiKey = "90a096f90b3e4715b6f2e536d934c5af";
    const api_url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`;

    fetch(api_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to geocode.');
        }
        return response.json();
      })
      .then((data) => {
        onCityChange(data.results[0].components.city);
      })
      .catch((error) => console.error('Error fetching geocode data:', error));
  };

  return null;
};

export default Geolocation;

