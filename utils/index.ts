import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ec516461b2msh1f047b68a25bc66p11a99bjsnd89804051cf6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // price in dollars
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  //calculate rate based on mileage and age.
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental x day
  const rentalRatePerDay = basePricePerDay + mileageFactor + ageFactor;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  //api
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
