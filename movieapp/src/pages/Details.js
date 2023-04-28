import "../App.css";
import Navbar from "../components/Navbar";

export function Details() {
  return (
    <div className="homepage">
      <Navbar />

      <div className="poster_filme">
        <div className="img_poster">
          <img
            className="poster"
            src={require("../assets/Stranger_Things_Temporada_1_Poster.jpg")}
          />
          <button className="btn_add_watchlist">Add to Whatchist</button>
        </div>

        <div className="info_about">
          <h1>Stranger Things</h1>
          <div className="genres_filmes">
            <button className="btn_genres">Drama</button>
            <button className="btn_genres">Sci-Fi & Fantasy</button>
            <button className="btn_genres">Mystery</button>
          </div>

          <h3>Overview</h3>
          <p className="overview_text">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces, and one strange
            little girl.
          </p>

          <h3>Cast</h3>

          <div className="div_general_cast">
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast1.jpg")} />
            <p className="name_cast">Millie Boby Brown</p>
            </div>
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast 3.jpg")} />
            <p className="name_cast">Finn Wolfhard</p>
            </div>
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast4.jpg")} />
  <p className="name_cast">Noah Schnapp</p>
            </div>
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast5.jpg")} />
            <p className="name_cast">Caleb McLaughlin</p>
            </div>
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast6.webp")} />
            <p className="name_cast">Sadie Sink</p>
            </div>
            <div className="name_and_photo_cast">
            <img className="cast_img" src={require("../assets/cast2.webp")} /> 
             <p className="name_cast">David Harbour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
