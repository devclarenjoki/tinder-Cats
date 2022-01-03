/**
 * Represents the direction of a swipe
 */
 export type Direction = "left" | "right" | "up" | "down";

 /**
  * Represents the Cat object from catsapi
  */
 export interface Cat {
   id: string;
   url: string;
   [key: string]: any;
 }
 
 /**
  * Represents the Cat LikesAndDislikes object that will be stringified and saved to local storage
  *
  * You can JSON.parse this string to get back the LikesAndDislikes object
  */
 export interface LikesAndDislikes {
   likes: string[];
   dislikes: string[];
 }
 
 /**
  * The local storage key for the likes and dislikes
  */
 const STORAGE_KEY = "likesAndDislikes";
 
 /**
  * The service that handles the likes and dislikes for the cats
  */
 class CatsService {
   likesAndDislikes: LikesAndDislikes;
 
   constructor() {
     // Get the likes and dislikes from local storage
     const persistedLikesAndDislikes = localStorage.getItem(STORAGE_KEY);
 
     if (persistedLikesAndDislikes) {
       // If there are likes and dislikes in local storage, parse them
       this.likesAndDislikes = JSON.parse(persistedLikesAndDislikes);
     } else {
       // If there are no likes and dislikes in local storage, create an empty object and persist it
 
       // Create an empty likes and dislikes object
       const initialLikesAndDislikes: LikesAndDislikes = {
         likes: [],
         dislikes: []
       };
 
       // Persist the empty likes and dislikes object
       localStorage.setItem(
         STORAGE_KEY,
         JSON.stringify(initialLikesAndDislikes)
       );
 
       // Set the likes and dislikes to the empty object
       this.likesAndDislikes = initialLikesAndDislikes;
     }
   }
 
   /**
    * Returns likes and dislikes
    *
    * @returns {LikesAndDislikes}
    */
   getLikesAndDislikes(): LikesAndDislikes {
     return this.likesAndDislikes;
   }
 
   /**
    * Adds cat id to likes and removes it from dislikes if it exists
    *
    * @param catId Id of the cat to be liked
    *
    *
    */
   addLike(catId: string): void {
     const dislikedIndex = this.likesAndDislikes.dislikes.findIndex(
       (id) => id === catId
     );
 
     if (dislikedIndex !== -1) {
       this.likesAndDislikes.dislikes.splice(dislikedIndex, 1);
     }
 
     this.likesAndDislikes.likes.push(catId);
 
     this.persistData();
   }
 
   /**
    * Adds cat id to dislikes and removes it from likes if it exists
    *
    * @param catId Id of the cat to be disliked
    */
   addDislike(catId: string): void {
     const likedIndex = this.likesAndDislikes.likes.findIndex(
       (id) => id === catId
     );
 
     if (likedIndex !== -1) {
       this.likesAndDislikes.likes.splice(likedIndex, 1);
     }
 
     this.likesAndDislikes.dislikes.push(catId);
 
     this.persistData();
   }
 
   /**
    * Persists the likes and dislikes to local storage
    *
    * Call this everytime you change the likes and dislikes
    */
   persistData(): void {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(this.likesAndDislikes));
   }
 }
 
 export const catsService = new CatsService();
 