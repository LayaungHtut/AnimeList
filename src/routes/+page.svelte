<script lang="ts">
	import AnimeCard from '$lib/components/AnimeCard.svelte';


    let { data } = $props();

</script>

<div class="container">
    <main class="main">
      <h2 class="title">Explore Anime</h2>
      <section class="anime-grid">

    {#each data.animes as anime }
        <AnimeCard {...anime} />
    {/each}

</section>
<div id="spinner-container">
  
</div>
</main>
</div>

<style>
    .container {
      max-width: 80rem;
      margin: 0 auto;
      background-color: #0F1117;
    }
    .main {
      padding: 4rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
    .title {
      font-size: 1.875rem;
      color: white;
      font-weight: bold;
    }
    .anime-grid {
      display: grid;
      gap: 2.5rem;
    }
    @media (min-width: 640px) {
      .anime-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 768px) {
      .anime-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .anime-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    #spinner-container {
      text-align: center;
    }
  </style>


