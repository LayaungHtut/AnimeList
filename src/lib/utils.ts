import type { AnimeProp } from "$lib";

export const fetchNewData = async function(pageNumber:Number) {
     let request = await fetch(`https://shikimori.one/api/animes?page=${pageNumber}&limit=8&order=popularity`);
     
     let animes;
     
    try {
        let reponse = await request.json();
        animes = reponse;
    } catch (error) {
        console.log(error);
    }
    return {
        animes
    } as {animes: AnimeProp[]};
};