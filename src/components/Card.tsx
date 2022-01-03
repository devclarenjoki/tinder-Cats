const Card = ({
    item
  }: {
    item: {
      url: string;
      name: string;
      id: number;
    };
  }) => {
    // Handle like...
    const handleLike = (event: any) => {
      event.preventDefault();
      const stored = localStorage.getItem("liked") || "[]";
      const likes = JSON.parse(stored);
      const found = likes.find((el: any) => el.name === item.name);
      if (!found) likes.push(item);
  
      // Update local storage...
      localStorage.setItem("liked", JSON.stringify(likes));
      console.log("Like : ", item, likes.length);
    };
  
    // Handle dislike...
    const handleDislike = (event: any) => {
      event.preventDefault();
      const stored = localStorage.getItem("liked") || "[]";
      const likes = JSON.parse(stored);
      const itemIndex = likes.indexOf(item);
      likes.splice(itemIndex, 1);
      console.log("Dislike : ", item, likes.length);
      // Update local storage...
      localStorage.setItem("liked", JSON.stringify(likes));
  
      //
  
      const disLiked = localStorage.getItem("disliked") || "[]";
      const dislikes = JSON.parse(disLiked);
      dislikes.push(item);
  
      // Update local storage...
      localStorage.setItem("disliked", JSON.stringify(dislikes));
      console.log("Dislikes :", dislikes, dislikes.length);
    };
  
    return (
      <div>
        <img width={150} src={item.url} alt={item.name} />
        <div>
          <button onClick={handleLike}>Like</button>
          <button onClick={handleDislike}>Dislike</button>
        </div>
      </div>
    );
  };
  
  export default Card;