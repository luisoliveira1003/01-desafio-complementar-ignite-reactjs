import { MovieCard } from "./MovieCard";

interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  contentGenre: GenreProps;
  contentMovie: MovieProps[];
}

export function Content({ contentGenre, contentMovie }: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {contentGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {contentMovie.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
