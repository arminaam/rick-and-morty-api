import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CharacterInfo from "./components/CharacterInfo";
import "animate.css";
import Episode from "./components/Episode";
import Preload from "./components/Preload";
import FavCharacter from "./components/FavCharacter";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Sidepanel2 from "./components/Sidepanel2";

function App() {
  const [openSidepanel, setOpenSidepanel] = useState(true);
  const [expandsidepanel, setExpandSidePanel] = useState(true);
  const [openepisode, setOpenEpisode] = useState(false);
  const [episode, setEpisode] = useState({});
  const [openCharacterInfo, setOpenCharacterInfo] = useState(false);
  const [CharacterInfoo, setCharacterInfoo] = useState({});
  const [favCHaracters, setFavCHaracters] = useState([]);
  const [openFavModal, setOpenFavModal] = useState(false);
  const [isOpenSeason, setIsOpenSeason] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [isLoadEpisodes, setIsLoadEpisodes] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [activeEpisode, setActiveEpisode] = useState(null);

  const storedData = localStorage.getItem("favitem");
  const favoriteCharacters = storedData ? JSON.parse(storedData) : [];
  const seasons = [1, 2, 3];

  const Opencharacterpage = (ch_info) => {
    setOpenCharacterInfo(true);
    setCharacterInfoo(ch_info);
  };

  function handleAddFavoriteCharacter(params) {
    setOpenCharacterInfo(false);
  }

  function handleAddFavoriteCharacterAndNotify(fav_CharacterInfoo) {
    setFavCHaracters((prev) => {
      if (!prev.some((item) => item.id === fav_CharacterInfoo.id)) {
        const updatedFavorites = [...prev, fav_CharacterInfoo];
        localStorage.setItem("favitem", JSON.stringify(updatedFavorites));
        toast.success("Successfully added !");
        return updatedFavorites;
      } else {
        toast("already added !");
      }
      return prev;
    });
  }

  function openFavoriteCharactersModal() {
    setOpenFavModal(true);
  }

  function closeFavoriteCharactersModal() {
    setOpenFavModal(false);
  }

  function handleRemoveFavoriteCharacterAndNotify(id) {
    const fi = favoriteCharacters.filter((ch) => ch.id !== id);
    setFavCHaracters(fi);
    localStorage.setItem("favitem", JSON.stringify(fi));
    toast.success("Successfully deleted !");
  }

  function test10() {
    setExpandSidePanel(!expandsidepanel);
  }

  return (
    <div className="app h-screen grid">
      <Toaster />
      <div>
        <Navbar
          openFavoriteCharactersModal={openFavoriteCharactersModal}
          setOpenEpisode={setOpenEpisode}
          setIsOpenSeason={setIsOpenSeason}
          setIsLoadEpisodes={setIsLoadEpisodes}
          setActiveEpisode={setActiveEpisode}
        />
        <div
          className={`content grid ${
            expandsidepanel
              ? "grid-cols-[200px_minmax(900px,_1fr)] desktop_1024:grid-cols-[200px_minmax(0px,_1fr)] tablet:grid-cols-[200px_minmax(0px,_1fr)]"
              : "grid-cols-[100px_minmax(900px,_1fr)] tablet:grid-cols-[100px_minmax(0px,_1fr)]"
          } !h-[90%]  transition-width duration-300`}
        >
          {openSidepanel == true ? (
            <Sidepanel2
              test10={test10}
              expandsidepanel={expandsidepanel}
              setExpandSidePanel={setExpandSidePanel}
              setEpisode={setEpisode}
              setOpenEpisode={setOpenEpisode}
              isOpenSeason={isOpenSeason}
              setIsOpenSeason={setIsOpenSeason}
              isLoadEpisodes={isLoadEpisodes}
              setIsLoadEpisodes={setIsLoadEpisodes}
              activeEpisode={activeEpisode}
              setActiveEpisode={setActiveEpisode}
            />
          ) : null}
          <div className={`flex justify-center items-center`}>
            {openepisode == true ? (
              <Episode
                episode={episode}
                Opencharacterpage={Opencharacterpage}
                isLoadEpisodes={isLoadEpisodes}
              />
            ) : (
              <Preload openSidepanel={openSidepanel} />
            )}
          </div>
          {openCharacterInfo ? (
            <CharacterInfo
              CharacterInfoo={CharacterInfoo}
              handleAddFavoriteCharacter={handleAddFavoriteCharacter}
              handleAddFavoriteCharacterAndNotify={
                handleAddFavoriteCharacterAndNotify
              }
            />
          ) : null}
          {openFavModal ? (
            <FavCharacter
              closeFavoriteCharactersModal={closeFavoriteCharactersModal}
              handleRemoveFavoriteCharacterAndNotify={
                handleRemoveFavoriteCharacterAndNotify
              }
              favoriteCharacterss={favoriteCharacters}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
