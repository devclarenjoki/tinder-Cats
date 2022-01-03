import React, { useState, useEffect, useCallback } from "react";
import TinderCard from "react-tinder-card";
import { Cat, catsService, Direction } from "../services/cats.service";
import "./TinderCards.css";
import SwipeButtons from "../components/SwipeButtons";

function TinderCards() {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?page=1&limit=10`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "458b2b50-2bca-436f-b209-95d111fec71b"
          }
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

      <SwipeButtons />
    </div>
  );
}

export default TinderCards;
