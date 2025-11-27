<script>
  export let videoUrl = '';
  export let title;
  export let description;

  let videoError = false;
  let videoLoading = true;

  // Convert YouTube URL to embed format
  function getEmbedUrl(url) {
    if (!url) return '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com/watch format
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const videoId = urlParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // If already embed format or direct video URL
    return url;
  }

  $: embedUrl = getEmbedUrl(videoUrl);
  $: isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

  function handleVideoError() {
    videoError = true;
    videoLoading = false;
  }

  function handleVideoLoad() {
    videoLoading = false;
  }
</script>

<section id="video" class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p class="text-lg md:text-xl opacity-80">{description}</p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="aspect-video bg-base-300 rounded-lg overflow-hidden shadow-2xl">
        {#if videoError}
          <div class="flex items-center justify-center h-full flex-col gap-4 p-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-center text-lg">Impossible de charger la vidéo. Veuillez réessayer plus tard.</p>
            <a href="#contact" class="btn btn-primary">Nous Contacter</a>
          </div>
        {:else if isYouTube}
          <iframe
            class="w-full h-full"
            src={embedUrl}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            on:error={handleVideoError}
          ></iframe>
        {:else}
          {#if videoLoading}
            <div class="flex items-center justify-center h-full">
              <span class="loading loading-spinner loading-lg"></span>
            </div>
          {/if}
          <video
            class="w-full h-full"
            controls
            preload="metadata"
            on:error={handleVideoError}
            on:loadeddata={handleVideoLoad}
          >
            {#if videoUrl}
              <source src={videoUrl} type="video/mp4" />
            {/if}
            <track kind="captions" label="Français" srclang="fr" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        {/if}
      </div>
    </div>
  </div>
</section>
