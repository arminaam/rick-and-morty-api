import React from "react";
import { TrashIcon, XCircleIcon } from "@heroicons/react/24/solid";
function FavCharacter({
  closeFavoriteCharactersModal,
  handleRemoveFavoriteCharacterAndNotify,
  favoriteCharacterss,
}) {
  return (
    <div>
      <div
        onClick={() => closeFavoriteCharactersModal()}
        className="modal_backdrop fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-70 flex items-center justify-center z-10"
      ></div>
      <div className="modal_content overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C3C3C3] rounded-xl p-8 z-20 h-[40rem] min-[2560px]:w-[77rem] min-[1440px]:w-[66rem] lg:w-[55rem]">
        <div>
          <button onClick={() => closeFavoriteCharactersModal()}>
            <XCircleIcon className="w-12 cursor-pointer text-gray-500" />
          </button>
        </div>
        <div className="flex justify-center font-semibold text-2xl text-center">
          <span>
            Favorite list <br /> ({favoriteCharacterss.length})
          </span>
        </div>
        <div
          className={`${
            favoriteCharacterss.length !== 0
              ? "grid grid-cols-5 justify-items-center gap-x-4 gap-y-7 pt-5"
              : "flex h-[70%] items-center justify-center"
          }`}
        >
          {favoriteCharacterss.length == 0 ? (
            <div className="text-center">
              <p>no favorite characters found</p>
              <p>add someone:)</p>
            </div>
          ) : (
            favoriteCharacterss.map((favch) => (
              <Fav favch={favch} handleRemoveFavoriteCharacterAndNotify={handleRemoveFavoriteCharacterAndNotify} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FavCharacter;

function Fav({ favch, handleRemoveFavoriteCharacterAndNotify }) {
  return (
    <div className="flex items-center flex-col gap-y-3 border border-slate-800 p-4 rounded-2xl">
      <div>
        <img className="w-52 rounded-3xl" src={favch.image} alt="" />
      </div>
      <div>
        <div className="text-center">
          <span className="font-bold">{favch.name}</span>
        </div>
        <div className="font-medium text-center flex items-center justify-center gap-2">
          <span>{favch.gender}</span> | <span>{favch.status}</span>
          <button onClick={() => handleRemoveFavoriteCharacterAndNotify(favch.id)}>
            <TrashIcon className="w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
