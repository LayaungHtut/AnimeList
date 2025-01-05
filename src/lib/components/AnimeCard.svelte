<script lang="ts">
    import type { AnimeProp } from "$lib";
    let { id, name, image, kind, score, episodes, episodes_aired}: AnimeProp = $props();
</script>

<section>
    <div class="container">
        <div class="image-wrapper">
          <img src={`https://shikimori.one${image.original}`} alt={name} />
        </div>
        <div class="content">
          <div class="header">
            <h2 class="title">{name}</h2>
            <div class="badge">
              <p>{kind}</p>
            </div>
          </div>
          <div class="details">
            <div class="detail-item">
              <img src="./episodes.svg" alt={name} class="object-contain" />
              <p>{episodes || episodes_aired }</p>
            </div>
            <div class="detail-item">
              <img src="./star.svg" alt="star" class="object-contain" />
              <p class="score">{score}</p>
            </div>
          </div>
        </div>
      </div>
</section>

<style>
    .container {
    max-width: 24rem;
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 37vh;
  }
  .image-wrapper img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
  }
  .content {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
  }
  .title {
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
    line-clamp: 1;
    width: 100%;
  }
  .badge {
    padding: 0.25rem 0.5rem;
    background-color: #161921;
    border-radius: 0.25rem;
  }
  .badge p {
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  .details {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .detail-item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
  .detail-item p {
    font-size: 1rem;
    color: white;
    font-weight: bold;
  }
  .score {
    color: #FFAD49;
  }
</style>