import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch3";
type Movie = {
  title: string;
  year: number;
  rating: number;
};
const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // years array unique and sorted
  const years = movies
    ? Array.from(new Set(movies.map((movie) => movie.year))).sort(
        (a, b) => a - b
      )
    : [];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    if (year === "all") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies ? movies.filter((movie) => movie.year === Number(year)) : []
      );
    }
  };

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/movies")) as {
        status: number;
        message: string;
        data: any;
      };

      const { status, data } = res;

      if (status === 200) {
        setMovies(data);
        setFilteredMovies(data);
        // console.log(data);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movies) {
    return <p>No movie Found!!</p>;
  }
  // ...existing code...
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Movies</h1>
      <p>
        Filter by Year:
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="all">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </p>
      <ul>
        {filteredMovies &&
          filteredMovies.map(({ title, year, rating }, index) => {
            return (
              <li key={index}>
                <p>Name: {title}</p>
                <p>Year: {year}</p>
                <p>Ratings: {rating}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
