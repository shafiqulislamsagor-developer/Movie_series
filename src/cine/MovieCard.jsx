import { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getFunctionUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cardData, setCardData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const found = cardData.find((item) => item.id === movie.id);

    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      console.error("error , don't added movie");
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => {
            setSelectedMovie(null);
            setShowModal(false);
          }}
        />
      )}
      <figure
        onClick={() => {
          setSelectedMovie(movie);
          setShowModal(true);
        }}
        className="p-4 cursor-pointer border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img
          className="w-full h-[400px] object-cover"
          src={getFunctionUrl(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            onClick={(e) => handleAddToCart(e, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src={tag} alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
