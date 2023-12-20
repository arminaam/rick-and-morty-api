// import React, { useEffect, useState } from "react";
// import "animate.css";
// import {
//   ArrowLeftOnRectangleIcon,
//   ArrowRightOnRectangleIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
//   FilmIcon,
// } from "@heroicons/react/24/solid";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Sidebar({
//   test10,
//   expandsidepanel,
//   setExpandSidePanel,
//   setEpisode,
//   setOpenEpisode,
// }) {
//   const [isopenseason1, setIsOpenSeason1] = useState(false);
//   const [isopenseason2, setIsOpenSeason2] = useState(false);
//   const [isopenseason3, setIsOpenSeason3] = useState(false);
//   const [season01, setSeason01] = useState([]);
//   const [season02, setSeason02] = useState([]);
//   const [season03, setSeason03] = useState([]);
//   const [isload_s1_ep, setIsload_s1_ep] = useState(false);
//   const [isload_s2_ep, setIsload_s2_ep] = useState(false);
//   const [isload_s3_ep, setIsload_s3_ep] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response1 = await axios.get(
//           "https://rickandmortyapi.com/api/episode"
//         );
//         const response2 = await axios.get(
//           "https://rickandmortyapi.com/api/episode?page=2"
//         );
//         const response3 = await axios.get(
//           "https://rickandmortyapi.com/api/episode?page=3"
//         );
//         if (
//           response1.status !== 200 ||
//           response2.status !== 200 ||
//           response3.status !== 200
//         ) {
//           throw new Error();
//         }
//         const season1 = response1.data.results;
//         const season2 = response2.data.results;
//         const season3 = response3.data.results;
//         const allSeasons = [...season1, ...season2, ...season3];
//         setSeason01(allSeasons.slice(0, 11));
//         setSeason02(allSeasons.slice(11, 22));
//         setSeason03(allSeasons.slice(22, 33));
//       } catch (error) {
//         toast.error(error.message);
//       }
//     }
//     fetchData();
//   }, []);

//   function test1() {
//     setExpandSidePanel(true);
//     setIsOpenSeason1(true);
//     setIsload_s1_ep(true);
//   }

//   function test2() {
//     setExpandSidePanel(true);
//     setIsOpenSeason2(true);
//     setIsload_s2_ep(true);
//   }

//   function test3() {
//     setExpandSidePanel(true);
//     setIsOpenSeason3(true);
//     setIsload_s3_ep(true);
//   }

//   function toggleSeasonHandler(seasonNumber) {
//     const setIsOpenSeason = {
//       1: setIsOpenSeason1,
//       2: setIsOpenSeason2,
//       3: setIsOpenSeason3,
//     };

//     const setIsload_s_ep = {
//       1: setIsload_s1_ep,
//       2: setIsload_s2_ep,
//       3: setIsload_s3_ep,
//     };

//     // Toggle the isOpen state for the specified season
//     setIsOpenSeason[seasonNumber]((prevIsOpen) => !prevIsOpen);

//     // Close other seasons and their episodes
//     for (let i = 1; i <= 3; i++) {
//       if (i !== seasonNumber) {
//         setIsOpenSeason[i](false);
//         setIsload_s_ep[i](false);
//       }
//     }

//     // Toggle the episode loading state for the specified season
//     setIsload_s_ep[seasonNumber]((prevIsLoad) => !prevIsLoad);
//   }
//   function season1_openChevronhandler() {
//     toggleSeasonHandler(1);
//   }
//   function season2_openChevronhandler() {
//     toggleSeasonHandler(2);
//   }
//   function season3_openChevronhandler() {
//     toggleSeasonHandler(3);
//   }

//   function handleSeason1EpisodeClick(id) {
//     let fi = season01.filter((s) => s.id === id);
//     fi.map((s) => setEpisode(s));
//     setOpenEpisode(true);
//   }

//   function handleSeason2EpisodeClick(id) {
//     let fi = season02.filter((s) => s.id === id);
//     fi.map((s) => setEpisode(s));
//     setOpenEpisode(true);
//   }

//   function handleSeason3EpisodeClick(id) {
//     let fi = season03.filter((s) => s.id === id);
//     fi.map((s) => setEpisode(s));
//     setOpenEpisode(true);
//   }

//   return (
//     <aside className="flex">
//       <div
//         className={`flex flex-col items-center transition-width duration-300 ${
//           expandsidepanel ? "w-64" : "w-24"
//         } h-screen py-8 bg-white dark:bg-gray-900 dark:border-gray-700"`}
//       >
//         <div className="flex flex-col items-center m-4 mb-9 space-y-4">
//           <a
//             onClick={test10}
//             href="#"
//             className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-white dark:hover:text-white"
//           >
//             {expandsidepanel ? (
//               <ArrowLeftOnRectangleIcon className="w-8" />
//             ) : (
//               <ArrowRightOnRectangleIcon className="w-8" />
//             )}
//           </a>
//         </div>

//         <nav className="flex flex-col items-center flex-1 space-y-8">
//           <div className="p-1.5 inline-block rounded-lg">
//             {expandsidepanel ? (
//               <div className="seasons flex flex-col gap-5">
//                 <div className="season1 flex justify-center flex-col items-center w-60">
//                   <button
//                     className="flex items-center flex-row-reverse text-lg text-gray-400 hover:text-white"
//                     onClick={season1_openChevronhandler}
//                   >
//                     {isopenseason1 ? (
//                       <div className="Season01 flex gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season01</span>
//                         <ChevronDownIcon className="w-[1.5rem]" />
//                       </div>
//                     ) : (
//                       <div className="Season01 flex  gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season01</span>
//                         <ChevronRightIcon className="w-[1.5rem]" />
//                       </div>
//                     )}
//                   </button>
//                   {isload_s1_ep ? (
//                     <div className="flex flex-col leading-[3rem] ml-8">
//                       {season01.map((ep) => (
//                         <button
//                           className="text-gray-600  hover:text-white"
//                           onClick={() => handleSeason1EpisodeClick(ep.id)}
//                         >
//                           <li>
//                             <span>Episode</span>
//                             <span>{ep.id.toString().padStart(2, "0")}</span>
//                           </li>
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <div className="season2 flex justify-center flex-col items-center w-60">
//                   <button
//                     className="flex items-center flex-row-reverse text-lg text-gray-400 hover:text-white"
//                     onClick={season2_openChevronhandler}
//                   >
//                     {isopenseason2 ? (
//                       <div className="Season02 flex  gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season02</span>
//                         <ChevronDownIcon className="w-[1.5rem]" />
//                       </div>
//                     ) : (
//                       <div className="Season02 flex  gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season02</span>
//                         <ChevronRightIcon className="w-[1.5rem]" />
//                       </div>
//                     )}
//                   </button>
//                   {isload_s2_ep ? (
//                     <div className="flex flex-col leading-[3rem] ml-8">
//                       {season02.map((ep) => (
//                         <button
//                           className="text-gray-600  hover:text-white"
//                           onClick={() => handleSeason2EpisodeClick(ep.id)}
//                         >
//                           <li>
//                             <span>Episode</span>
//                             <span>{ep.id.toString().padStart(2, "0")}</span>
//                           </li>
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <div className="season3 flex justify-center flex-col items-center w-60">
//                   <button
//                     className="flex items-center flex-row-reverse text-lg text-gray-400 hover:text-white"
//                     onClick={season3_openChevronhandler}
//                   >
//                     {isopenseason3 ? (
//                       <div className="Season03 flex  gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season03</span>
//                         <ChevronDownIcon className="w-[1.5rem]" />
//                       </div>
//                     ) : (
//                       <div className="Season03 flex  gap-3">
//                         <FilmIcon className="w-4" />
//                         <span>Season03</span>
//                         <ChevronRightIcon className="w-[1.5rem]" />
//                       </div>
//                     )}
//                   </button>
//                   {isload_s3_ep ? (
//                     <div className="flex flex-col leading-[3rem] ml-8">
//                       {season03.map((ep) => (
//                         <button
//                           className="text-gray-600  hover:text-white"
//                           onClick={() => handleSeason3EpisodeClick(ep.id)}
//                         >
//                           <li>
//                             <span>Episode</span>
//                             <span>{ep.id.toString().padStart(2, "0")}</span>
//                           </li>
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <div className="flex flex-col gap-4 text-gray-400">
//                 <button
//                   className="flex flex-row-reverse items-center gap-3 dark:hover:text-white"
//                   onClick={test1}
//                 >
//                   <span>S-01</span>
//                   <FilmIcon className="w-4" />
//                 </button>
//                 <button
//                   className="flex flex-row-reverse gap-3 items-center dark:hover:text-white"
//                   onClick={test2}
//                 >
//                   <span>S-02</span>
//                   <FilmIcon className="w-4" />
//                 </button>
//                 <button
//                   className="flex flex-row-reverse gap-3 items-center dark:hover:text-white"
//                   onClick={test3}
//                 >
//                   <span>S-03</span>
//                   <FilmIcon className="w-4" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;