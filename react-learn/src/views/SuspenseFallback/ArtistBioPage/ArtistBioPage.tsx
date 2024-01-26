import { useState } from "react";
import ArtistPage from "./components/ArtistPage";

const ArtistBioPage = () => {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    );
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    );
  }
};

export default ArtistBioPage;
