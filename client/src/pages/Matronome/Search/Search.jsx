import React from "react";
import { useState } from "react";
import "./Search.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [popup, setPopup] = useState(false);
    const [results, setResults] = useState([]);
  
    // sets artist name to the text entered by user
    const inputHandlerArtist = (e) => {
      setArtist(e.target.value);
    };
  
    // sets song name to the text entered by user
    const inputHandlerSong = (e) => {
      setSong(e.target.value);
    };
  
    // launches search if user presses enter
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSearchClick();
      }
    };
  
    // called when user clicks on "search"
    // searches for songs in the API's db using user input
    const handleSearchClick = async () => {
      if (!artist.trim() || !song.trim()) {
        // if user has not typed in a song, do not proceed
        alert("You must enter an artist and a song");
        return;
      }
  
      // if user has typed artist and song, proceed
      if (artist.trim() && song.trim()) {
        // user has typed in artist and song
        // search for song in the API's db
        const res = await fetch(
          `${process.env.REACT_APP_API_ADDRESS}/search/?api_key=${process.env.REACT_APP_API_KEY}&type=both&lookup=song:${song} artist:${artist}&limit=15`
        );
        const response = await res.json();
  
        if (response) {
          setPopup(true); // opens popup once response has been received
  
          if (response.search.error) {
            // no results found
            setResults(<p>no results were found</p>);
            return;
          }
  
          // results found
          setResults(
            response.search.map((song, i) => {
              return (
                <div
                  className="songCard"
                  key={i}
                  onClick={() => {
                    handleSongClick(song.tempo, song.time_sig);
                  }}
                >
                  <div className="songData">
                    <img src={song.album.img} className="albumImg" alt="album" />
                    <div className="textData">
                      <p className="artist">{song.artist.name}</p>
                      <p className="title">{song.song_title}</p>
                      <p className="tempo">{song.tempo} bpm</p>
                      <p className="key">Key: {song.key_of}</p>
                      <p className="album">
                        Album: {song.album.title} ({song.album.year}){" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          );
        }
      }
    };
  
    // called when user clicks on a song
    // passes song bpm and time signature to parent component
    const handleSongClick = (tempo, time_sig) => {
      props.onClickSong(tempo, time_sig); // passes song bpm and time signature to parent component (App.js)
      setArtist("");
      setSong("");
      setPopup(false); // closes popup
    };
  
    return (
      <div className="searchContainer">
        <p className="searchFor" style={{marginLeft:"80px"}}>Search for a song's BPM:</p>
        <input
          className="searchBar"
          type="text"
          value={artist}
          onChange={inputHandlerArtist}
          onKeyDown={handleKeyDown}
          placeholder="Artist"
          minLength="1"
          maxLength="20"
        />
        <input
          className="searchBar"
          type="text"
          value={song}
          onChange={inputHandlerSong}
          onKeyDown={handleKeyDown}
          placeholder="Song"
          minLength="0"
          maxLength="20"
        />
        <button className="button" type="button" onClick={handleSearchClick}
        style={{marginLeft:"197px"}}
        >
          Search
        </button>
  
        {/* if popup is true, display it with search results */}
        {popup && (
          <div className="popupContainer">
            <div className="popup">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="closeButton"
                onClick={() => setPopup(false)}
                />
              {results}
            </div>
          </div>
        )}
      </div>
    );
  }
  