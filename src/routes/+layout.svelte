<script>
    import '../app.css';
    let { children } = $props();
</script>

<main>

    <header class="header">
        <div class="header-content">
            <img src="/logo.svg" alt="logo" class="logo-large">
            <h1 class="header-title">
                Explore The <span class="highlight">Diverse Realms</span> of Anime Magic
            </h1>
        </div>
        <div class="header-image-container">
            <img src='/anime.png' alt="anime" class="header-image">
        </div>
    </header>
{@render children()}
<footer class="footer">
    <p class="footer-text">{new Date().getFullYear()} EpicAnimeVault</p>
    <img src="/logo.svg" alt="logo" class="logo-small">
    <div class="social-icons">
        <img src="/tiktok.svg" alt="TikTok">
        <img src="/instagram.svg" alt="Instagram">
        <img src="/twitter.svg" alt="Twitter">
    </div>
</footer>
</main>

<style>

    main {
        margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            box-sizing: border-box;
    }

    .header {
            background: url('/path/to/hero.jpg') center/cover no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            /* flex-direction: column; */
            width: 100%;
            padding: 4rem 2rem;
        }

        .header-content {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            text-align: center;
        }

        .logo-large {
            width: 101px;
            height: 96px;
        }

        .header-title {
            font-size: 3rem;
            color: white;
            font-weight: bold;
            line-height: 1.2;
            max-width: 600px;
        }

        .highlight {
            background: linear-gradient(90deg, #ff416c, #ff4b2b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .header-image-container {
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-image {
            max-height: 100%;
            object-fit: contain;
        }

        .footer {
            background-color: #161921;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .footer-text {
            color: white;
            font-weight: bold;
        }

        .logo-small {
            width: 47px;
            height: 44px;
        }

        .social-icons img {
            width: 30px;
            height: 30px;
            margin-left: 1rem;
            cursor: pointer;
        }
</style>