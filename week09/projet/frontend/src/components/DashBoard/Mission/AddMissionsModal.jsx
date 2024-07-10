/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function AddMissionsModal({
  isOpen,
  onRequestClose,
  notification,
  setNotification,
}) {
  const [formData, setFormData] = useState({
    mission: "",
    difficulty: null,
    poste: null,
  });

  // Fonction pour afficher la notification et la cacher après 2 secondes
  const showNotification = (message, success) => {
    setNotification({ message, success });

    // Masquer la notification après 2 secondes
    setTimeout(() => {
      setNotification({ message: "", success: false });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.info("formData", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/missions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        showNotification("Mission ajoutée avec succès", true);
        // Reset the form and close the modal
        setFormData({
          mission: "",
          difficulty: null,
          poste: null,
        });

        setTimeout(() => {
          onRequestClose();
        }, 1000);
      })
      .catch((error) => {
        showNotification("Erreur lors de l'ajout de la mission", false);
        console.error("Error:", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter un produit"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] text-[8px] text-center bg-[#281f31] text-white p-4 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Ajouter une mission</h2>
      <p className="text-xs mb-4">Veuillez remplir les champs suivants :</p>
      <hr className="mb-4" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center text-black gap-4"
      >
        <label>
          <span className="text-white text-[20px] font-secondary-font flex flex-col items-center gap-5">
            Description de la mission :
            <input
              type="text"
              name="mission"
              placeholder="Description de la mission"
              value={formData.mission}
              onChange={handleChange}
              className="w-[200px] p-2 rounded-lg text-sm text-black"
            />
          </span>
        </label>
        <label>
          <span className="text-white text-[20px] font-secondary-font">
            Niveau de difficulté de la mission :
            <select
              className="w-72 md:w-80 m-8 text-background-color-second"
              name="difficulty"
              onChange={handleChange}
            >
              <option className="text-xs" value="">
                Sélectionnez une difficulté
              </option>
              <option className="text-xs" value={1}>
                1
              </option>
              <option className="text-xs" value={2}>
                2
              </option>
              <option className="text-xs" value={3}>
                3
              </option>
            </select>
          </span>
        </label>
        <label>
          <span className="text-white text-[20px] font-secondary-font">
            Poste ciblé par la mission :
            <select
              className="w-72 md:w-80 m-8 text-background-color-second"
              name="poste"
              onChange={handleChange}
            >
              <option className="text-xs" value="">
                Sélectionnez un poste
              </option>
              <option className="text-xs" value="attaquant">
                Attaquant
              </option>
              <option className="text-xs" value="milieu">
                Milieu
              </option>
              <option className="text-xs" value="défenseur">
                Défenseur
              </option>
              <option className="text-xs" value="gardien">
                Gardien
              </option>
              <option className="text-xs" value="all">
                All
              </option>
            </select>
          </span>
        </label>

        <button
          type="submit"
          className="bg-[#544b5d] hover:bg-gray-300 w-[60px] h-[30px] text-base rounded-lg text-white"
        >
          Ajouter
        </button>
      </form>
      {notification.message && (
        <div
          data-aos="fade-right"
          data-aos-duration="3500"
          className={`fixed bottom-4 right-4 px-5 sm:px-5 py-2 rounded-lg flex items-center ${
            notification.success ? "bg-green-500" : "bg-red-500"
          } text-white text-sm`}
        >
          {notification.success ? (
            <IoCheckmarkDoneCircle className="mr-2" />
          ) : (
            <MdErrorOutline className="mr-2" />
          )}
          {notification.message}
        </div>
      )}
    </Modal>
  );
}
