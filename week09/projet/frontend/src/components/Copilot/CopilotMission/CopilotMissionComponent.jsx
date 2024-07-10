/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

export default function CopilotMissionComponent() {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState([]);
  const [missions, setMissions] = useState([]);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/usermissions`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.info("Success:", data);
  //     })
  //     .catch((err) => console.info(err));
  // }, []);
  // const [allMissions, setAllMissions] = useState();

  // const mission = [
  //   {
  //     id: 1,
  //     missi: "Réalise 2 passes décisives durant le même match.",
  //     status: "Non commencé",
  //     difficulty: 1,
  //   },
  //   {
  //     id: 2,
  //     missi:
  //       "Réalise 10 passes précises dans les pieds au sol durant le même match.",
  //     status: "Non commencé",
  //     difficulty: 2,
  //   },
  //   {
  //     id: 3,
  //     missi: "Marquez 3 buts durant le même match.",
  //     status: "Non commencé",
  //     difficulty: 3,
  //   },
  //   {
  //     id: 4,
  //     missi: "Cours 5 km durant le même match.",
  //     status: "Non commencé",
  //     difficulty: 2,
  //   },
  //   {
  //     id: 5,
  //     missi: "Gagne 5 duels de la tête durant le même match.",
  //     status: "Non commencé",
  //     difficulty: 2,
  //   },
  //   {
  //     id: 6,
  //     missi: "Réalise 5 interceptions défensives.",
  //     status: "Non commencé",
  //     difficulty: 1,
  //   },
  // ];
  // console.info("user", user.data);
  // console.info("allMissions", allMissions);
  // console.info("formData", formData);
  // console.info("user.poste", user.data.poste);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/usermissions`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        setFormData(data);
      })
      .catch((err) => console.info(err));

    // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/missions`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.info(data);
    //     setAllMissions(data);
    //   })
    //   .catch((err) => console.info(err));
  }, [missions]);
  const filterFormdata = formData.filter(
    (form) => form.user_id === user.data.user_id
  );
  const updateMission = (id, newStatus, index) => {
    const updatedMissions = filterFormdata.map((missi) =>
      missi.id === id ? { ...missi, status: newStatus } : missi
    );
    setMissions(updatedMissions);
    console.info("index", index);
    console.info("id", id);
    console.info("filterFormdata", filterFormdata);
    console.info(
      "filterFormdata[id - 1]?.missions_id",
      filterFormdata[id - 1]?.missions_id
    );
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/usermissions/${filterFormdata[index]?.missions_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        // body: formDataToSend,
        body: JSON.stringify({ status: newStatus }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        const updatedMission = missions.map((mission) =>
          mission.id === id ? { ...mission, status: newStatus } : mission
        );
        setMissions(updatedMission);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const renderStars = (difficulty) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <span key={i} className="text-yellow-500 text-4xl">
          <svg
            className="w-7 h-auto"
            fill={i <= difficulty ? "white" : "grey"}
            stroke="#FFFFFF"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2L9 10l-8 1 6 6-2 9 8-5 8 5-2-9 6-6-8-1-3-8z"
            />
          </svg>
        </span>
      );
    }
    return stars;
  };

  const handleClick = (id, currentStatus, index) => {
    // const updatedMissions = missions.map((miss) =>
    //   miss.id === id
    //     ? {
    //         ...miss,
    //         status:
    //           currentStatus === "Non commencé"
    //             ? "En cours"
    //             : currentStatus === "En cours"
    //               ? "Terminé"
    //               : "Non commencé",
    //       }
    //     : miss
    // );
    // setMissions(updatedMissions);
    const newStatus =
      currentStatus === "Non commencé"
        ? "En cours"
        : currentStatus === "En cours"
          ? "Terminé"
          : "Non commencé";
    updateMission(id, newStatus, index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return !user.data.poste ? (
    <h1 className="w-full text-center pt-2">
      Vous devez d'abord compléter votre profil avant de pouvoir avoir accès aux
      missions !
    </h1>
  ) : (
    <div className="flex flex-col text-white font-secondary-font items-center w-full py-5">
      <h1 className="text-2xl pb-4 text-center">Vos missions :</h1>
      <div className="flex flex-row justify-around items-center w-[95%] h-[50px] gap-5 bg-[#5b4f67]">
        <p className="w-[240px] md:w-20 text-center hidden md:block">
          Difficulté
        </p>
        <p className="w-auto md:w-[240px] text-center">Description</p>
        <p className="w-auto md:w-[134px] md:p-2 text-center">Status</p>
      </div>
      {filterFormdata?.map((miss, index) => (
        <div
          key={miss.id}
          onSubmit={handleSubmit}
          className={`flex flex-row justify-around items-center h-[105px] w-[95%] md:h-[72px] gap-2 ${
            index % 2 === 0 ? "bg-background-color-second" : "bg-[#5b4f67]"
          }`}
        >
          <div className="w-20 md:flex md:flex-row hidden">
            {renderStars(miss.difficulty, miss.id)}
          </div>
          <p className="w-[240px] hidden md:block text-center">
            {miss.mission}
          </p>
          <div className="flex flex-col justify-center items-center w-full md:hidden">
            <div className="flex flex-row h-auto">
              {renderStars(miss.difficulty, miss.id)}
            </div>
            <p className="w-48 text-center">{miss.mission}</p>
          </div>
          {/* {console.info("index", index)} */}
          <button
            onClick={() => handleClick(miss.id, miss.status, index)}
            value={miss.status}
            className="rounded-lg mr-2 md:mr-0 border-2 hover:bg-white hover:text-black h-[67px] md:h-[50px] p-2 w-full md:w-[134px]"
          >
            {miss.status}
          </button>
        </div>
      ))}
    </div>
  );
}
