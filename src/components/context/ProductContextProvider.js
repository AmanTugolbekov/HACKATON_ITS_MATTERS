import React, { createContext, useContext, useReducer } from "react";
import { API } from "../../helper/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);
const INIT_STATE = {
  //   categories: [],
  songs: [],
  oneSong: {},
  //   pages: 13,
};
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      //   case "GET_CATEGORIES":
      //     return { ...state, categories: action.payload };
      case "GET_SONGS":
        return { ...state, songs: action.payload };
      case "GET_ONE_SONG":
        return { ...state, oneSong: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! Config
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  };
  //! getCategory
  //   const getCategories = async () => {
  //     const { data } = await axios(`${API}/category/list/`, getConfig());
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: data.results,
  //     });
  //   };
  //! addSong
  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/song/post_song/`, newSong, getConfig());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //! getSongs
  const getSongs = async () => {
    const { data } = await axios(
      `${API}/list_song/${window.location.search}`,
      getConfig()
    );
    dispatch({
      type: "GET_SONGS",
      payload: data.results,
    });
  };
  const deleteSong = async (slug) => {
    try {
      await axios.delete(`${API}/song/delete_song/${slug}/`, getConfig());
      getSongs();
    } catch (error) {
      console.log(error);
    }
  };

  //! getOneSong
  const getOneSong = async (slug) => {
    try {
      const { data } = await axios(
        `${API}/song/retrieve_song/${slug}/`,
        getConfig()
      );
      dispatch({
        type: "GET_ONE_SONG",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //! ------------ EDITSONG ------------------
  const editSong = async (slug, newSong) => {
    try {
      await axios.patch(
        `${API}/song/update_song/${slug}/`,
        newSong,
        getConfig()
      );
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    addSong,
    getSongs,
    songs: state.songs,
    deleteSong,
    getOneSong,
    oneSong: state.oneSong,
    editSong,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
