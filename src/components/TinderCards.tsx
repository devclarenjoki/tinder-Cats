import React, { useState, useEffect, useCallback } from "react";
import TinderCard from "react-tinder-card";
import { Cat, catsService, Direction } from "../services/cats.service";
import "./TinderCards.css";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
// import ReplayIcon from "@material-ui/icons/ReplayIcon";
import IconButton from "@material-ui/core/IconButton";

function TinderCards() {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?page=1&limit=10`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "458b2b50-2bca-436f-b209-95d111fec71b",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setCats(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const swiped = (direction: Direction, catId: string) => {
    switch (direction) {
      case "right": {
        catsService.addLike(catId);
        break;
      }
      case "left": {
        catsService.addDislike(catId);
        break;
      }
      default: {
        console.log("No Action");
        break;
      }
    }
  };

  const handleLike = (event: any) => {
    event.preventDefault();
    const stored = localStorage.getItem("liked") || "[]";
    const likes = JSON.parse(stored);
    const found = likes.find((el: any) => el.name === cats);
    if (!found) likes.push(cats);

    // Update local storage...
    localStorage.setItem("liked", JSON.stringify(likes));
    console.log("Like : ", cats, likes.length);
  };

  // Handle dislike...
  const handleDislike = (event: any) => {
    event.preventDefault();
    const stored = localStorage.getItem("liked") || "[]";
    const likes = JSON.parse(stored);
    const itemIndex = likes.indexOf(cats);
    likes.splice(itemIndex, 1);
    console.log("Dislike : ", cats, likes.length);
    // Update local storage...
    localStorage.setItem("liked", JSON.stringify(likes));

    //

    const disLiked = localStorage.getItem("disliked") || "[]";
    const dislikes = JSON.parse(disLiked);
    dislikes.push(cats);

    // Update local storage...
    localStorage.setItem("disliked", JSON.stringify(dislikes));
    console.log("Dislikes :", dislikes, dislikes.length);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {cats.map((cat, index) => (
          <TinderCard
            className="swipe"
            key={`cat-${index}`}
            preventSwipe={["up", "down"]}
            onSwipe={(dir: Direction) => swiped(dir, cat.id)}
          >
            <div
              style={{ backgroundImage: `url(${cat.url})` }}
              className="card"
            >
              <h3>{cat.name ?? "Anonymous"}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="swipeButtons">
        {/* <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton> */}
        <IconButton className="swipeButtons__left" onClick={handleDislike}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right" onClick={handleLike}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default TinderCards;
