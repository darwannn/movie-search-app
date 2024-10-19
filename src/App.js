import { useState, useEffect, Fragment, useRef } from "react";

import Axios from "axios";

import AboutContainer from "./components/AboutContainer";
import AlertSnackbar from "./components/AlertSnackbar";
import MovieContainer from "./components/MovieContainer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import WatchList from "./components/WatchList";

export default function App() {
  const movieDetailsRef = useRef(null);
  const aboutDevelopersRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [actorsDetails, setActorsDetails] = useState([]);
  const [alertSnackbarMessage, setAlertSnackbarMessage] = useState("");
  const [isSnackbarShowed, setIsSnackbarShowed] = useState(false);

  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    if (!isDrawerOpen) {
      if (Object.keys(movieData).length !== 0 && !movieData.Error) {
        scrollIntoRef(movieDetailsRef);
      }
    }
  }, [movieData, isDrawerOpen]);

  function scrollIntoRef(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (Object.keys(movieData).length > 0) {
      //get all the images of all actors in the movie
      const actors = movieData.Actors.split(",");
      actors?.map((name) => {
        name = name.replace(".", "").trim(); // Remove unnecessary text
        Axios({
          url: `https://www.omdbapi.com/?apikey=973ba4c4&t=${name}`,
          method: "GET",
        }).then((response) => {
          const image = response.data.Poster;
          const poster = image === "N/A" ? null : image;
          setActorsDetails((prevVal) => [
            ...prevVal,
            { name: name, poster: poster },
          ]);
        });
      });
    }
  }, [movieData]);

  return (
    <div className="App">
      <AlertSnackbar
        isSnackbarShowed={isSnackbarShowed}
        message={alertSnackbarMessage}
        watchList={watchList}
        setWatchList={setWatchList}
        handleSnackbarClose={(event, reason) =>
          reason === "clickaway" ? null : setIsSnackbarShowed(false)
        }
      />

      <Navbar
        watchList={watchList}
        handleWatchListClick={() => {
          setIsDrawerOpen(true);
        }}
        scrollToDevelopers={() => scrollIntoRef(aboutDevelopersRef)}
      />
      <WatchList
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        watchList={watchList}
        setMovieData={setMovieData}
      />
      <Search setMovieData={setMovieData} />
      <div ref={movieDetailsRef}>
        {Object.keys(movieData).length !== 0 && !movieData.Error && (
          <Fragment key={movieData.imdbID}>
            <MovieContainer
              movieData={movieData}
              watchList={watchList}
              setWatchList={setWatchList}
              setAlertSnackbarMessage={setAlertSnackbarMessage}
              setIsSnackbarShowed={setIsSnackbarShowed}
              actors={actorsDetails}
            />
          </Fragment>
        )}
        <div ref={aboutDevelopersRef}>
          <AboutContainer />
        </div>
      </div>
    </div>
  );
}
