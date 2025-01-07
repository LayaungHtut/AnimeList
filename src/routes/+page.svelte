<script lang="ts">
	import AnimeCard from '$lib/components/AnimeCard.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let { data } = $props();
</script>

<div class="container">
	<main class="main">
		<h2 class="title">Explore Anime</h2>
		<section class="anime-grid">
			{#each data.animes as anime}
				<AnimeCard {...anime} />
			{/each}
			
		</section>
		<div id="spinner-container">
			<Spinner />
		</div>
	</main>
</div>

<style>
	.container {
		max-width: 80rem;
		margin: 0 auto;
		background-color: #0f1117;

		& .main {
			padding: 4rem 2rem;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			& .title {
				font-size: 1.875rem;
				color: white;
				font-weight: bold;
			}

			& .anime-grid {
				display: grid;
				gap: 2.5rem;
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}

	@media (max-width: 768px) {
		.container {
			& .main {
				& .anime-grid {
					grid-template-columns: repeat(1, 1fr);
				}
			}
		}
	}
	#spinner-container {
		text-align: center;
	}
</style>
