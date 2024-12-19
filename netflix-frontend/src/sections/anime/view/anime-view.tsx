// src/views/MovieView.tsx
import { Box} from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getmoviedata } from 'src/store/movie/movieThunk';
import { Series } from 'src/sections/content/series';
import { Anime } from '../Anime';

export const AnimeView = () => {
  const { movies, series } = useAppSelector((state) => state.movie.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getmoviedata()); // Fetch the movie data when the component mounts
  }, [dispatch]);

  return (
    <Box>
      <Anime movies={movies} />
    </Box>
  );
};
