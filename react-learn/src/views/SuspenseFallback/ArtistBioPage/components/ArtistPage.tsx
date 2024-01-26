import { Suspense } from "react";
import Albums from "./Albums.tsx";
import Biography from "./Biography.tsx";
import Panel from "./Panel.tsx";

export default function ArtistPage({ artist }:{artist:any}) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<Loading />}>
        <Biography artistId={artist.id} />
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
