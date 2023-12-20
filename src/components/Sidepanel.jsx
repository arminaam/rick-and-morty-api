import React, { useEffect, useState } from "react";
import "animate.css";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import toast from "react-hot-toast";

function Sidepanel({
  asidecloserhandler,
  openSidepanel,
  setOpenSidepanel,
  setEpisode,
  setOpenEpisode,
  setExpandSidePanel,
  expandsidepanel,
}) {
  const [isopenseason1, setIsOpenSeason1] = useState(false);
  const [isopenseason2, setIsOpenSeason2] = useState(false);
  const [season01, setSeason01] = useState([]);
  const [season02, setSeason02] = useState([]);
  const [isload_s1_ep, setIsload_s1_ep] = useState(false);
  const [isload_s2_ep, setIsload_s2_ep] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        );
        const response2 = await axios.get(
          "https://rickandmortyapi.com/api/episode?page=2"
        );

        if (response1.status !== 200 || response2.status !== 200) {
          throw new Error();
        }
        const season1 = response1.data.results;
        const season2 = response2.data.results;
        const allSeasons = [...season1, ...season2];
        setSeason01(allSeasons.slice(0, 11));
        setSeason02(allSeasons.slice(11, 22));
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchData();
  }, []);

  function season1_openChevronhandler() {
    setIsOpenSeason1((prevIsOpenSeason1) => !prevIsOpenSeason1);
    setIsOpenSeason2(false); // Close season 2
    setIsload_s1_ep(!isload_s1_ep);
    setIsload_s2_ep(false); // Close season 2 episodes
    // setExpandSidePanel(!expandsidepanel);
  }

  function season2_openChevronhandler() {
    setIsOpenSeason2((prevIsOpenSeason2) => !prevIsOpenSeason2);
    setIsOpenSeason1(false); // Close season 1
    setIsload_s2_ep(!isload_s2_ep);
    setIsload_s1_ep(false); // Close season 1 episodes
  }

  function handleSeason1EpisodeClick(id) {
    let fi = season01.filter((s) => s.id === id);
    fi.map((s) => setEpisode(s));
    setOpenEpisode(true);
  }

  function handleSeason2EpisodeClick(id) {
    let fi = season02.filter((s) => s.id === id);
    fi.map((s) => setEpisode(s));
    setOpenEpisode(true);
  }

  return (
    <div
      className={`sidepanel text-white h-screen ${
        expandsidepanel ? "w-64" : "w-32 "
      } bg-[#C3C3C3] shadow-2xl border-[#4C4B63] border animate__animated rounded-lg ${
        openSidepanel ? "animate__fadeInLeft" : ""
      } `}
    >
      <button onClick={asidecloserhandler} className="pl-8 pt-4">
        <XCircleIcon className="w-10 text-[#5386E4]" />
      </button>
      <div className="seasons flex flex-col gap-4 p-6">
        <div className="season1 flex justify-center flex-col items-center animate__animated animate__fadeInDown">
          <button
            className="flex items-center flex-row-reverse text-lg text-gray-600 mr-12"
            onClick={season1_openChevronhandler}
          >
            {isopenseason1 ? (
              <ChevronDownIcon className="w-[1.5rem]" />
            ) : (
              <ChevronRightIcon className="w-[1.5rem]" />
            )}
          </button>
          {isload_s1_ep ? (
            <div className="flex flex-col leading-[3rem] animate__animated animate__fadeInUp ml-8">
              {season01.map((ep) => (
                <button
                  className="text-gray-600  hover:text-gray-950"
                  onClick={() => handleSeason1EpisodeClick(ep.id)}
                >
                  <li>
                    <span>Episode</span>
                    <span>{ep.id.toString().padStart(2, "0")}</span>
                  </li>
                </button>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="season2 flex justify-center flex-col items-center animate__animated animate__fadeInDown">
          <button
            className="flex items-center flex-row-reverse text-lg text-gray-600 mr-12"
            onClick={season2_openChevronhandler}
          >
            {isopenseason2 ? (
              <ChevronDownIcon className="w-[1.5rem]" />
            ) : (
              <ChevronRightIcon className="w-[1.5rem]" />
            )}
            <span className="font-extrabold">
              {expandsidepanel ? "Season02" : "S02"}
            </span>
          </button>
          {isload_s2_ep ? (
            <div className="flex flex-col leading-[3rem] animate__animated animate__fadeInUp ml-8">
              {season02.map((ep) => (
                <button
                  onClick={() => handleSeason2EpisodeClick(ep.id)}
                  className="text-gray-600 hover:text-gray-950"
                >
                  <li>
                    <span>Episode</span>
                    <span>{ep.id.toString().padStart(2, "0")}</span>
                  </li>
                </button>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
