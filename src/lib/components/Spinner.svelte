<script lang="ts">
	import type { AnimeProp } from '$lib';
	import { fetchNewData } from '$lib/utils';
	import AnimeCard from './AnimeCard.svelte';
	let pagenumber = $state(1);

	let ancestor: HTMLElement;

	let options = {
		rootMargin: '0px',
		threshold: 1.0
	};

	let fetching = $state(false);
	let animeArray: AnimeProp[] = $state([]);

	async function getNewData() {
		pagenumber = pagenumber + 1;
		fetching = true;
		const request = await fetchNewData(pagenumber);
		try {
			request.animes.forEach((anime) => {
				animeArray.push(anime);
			});
			fetching = false;
		} catch (error) {
			console.log('error');
		}
	}
	$effect(() => {
		if (ancestor) {
			let observer = new IntersectionObserver(() => {
				getNewData(), options;
			});
			observer.observe(ancestor);
		}
	});
</script>

<section class="anime-grid">
	{#if animeArray.length !== 0}
		{#each animeArray as anime, i}
			<AnimeCard {...anime} />
		{/each}
	{/if}
</section>

<div class="ancestor" bind:this={ancestor}>
	{#if fetching}
		<div class="spinner-container">
			<img src="./spinner.svg" alt="spinner" width="56" height="56" class="spinner" />
		</div>
	{/if}
</div>

<style>
	.anime-grid {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: repeat(4, 1fr);
	}

	.ancestor {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		& .spinner-container {
			display: flex;
			justify-content: center;
			align-items: center;

			& .spinner {
				object-fit: contain;
			}
		}
	}

	@media (max-width: 768px) {
		.anime-grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
