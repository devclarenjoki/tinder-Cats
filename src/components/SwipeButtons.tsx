import { useState, useEffect, useCallback } from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { catsService, LikesAndDislikes } from "../services/cats.service";

function SwipeButtons() {
  const [likesAndDislikes, setLikesAndDislikes] = useState<LikesAndDislikes>();

  const getLikesAndDislikes = useCallback(() => {
    setLikesAndDislikes(catsService.getLikesAndDislikes());
  }, []);

  useEffect(() => {
    getLikesAndDislikes();
  }, [getLikesAndDislikes]);

  return (
    <div className="swipeButtons">
      <div className={`app-wrapper ${likesAndDislikes?.likes ? "likes" : ""}`}>
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left" onClick={() => {}}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right" onClick={() => {}}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButtons;
