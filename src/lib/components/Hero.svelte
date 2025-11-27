<script>
  export let title;
  export let subtitle;
  export let description;
  export let primaryCta;
  export let secondaryCta;
</script>

<section id="hero" class="bg-gradient-to-br from-base-200 via-base-100 to-primary/10" style="min-height: 70vh;">
  <div class="container mx-auto px-4 py-16">
    <div class="hero" style="min-height: 70vh;">
      <div class="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-7xl">
        <!-- Illustration -->
        <div class="flex-1 w-full max-w-lg lg:max-w-2xl slide-in-right">
          <img 
            src="/Healini/hero-illustration.svg" 
            alt="Healini - Gestion de Cabinet Médical" 
            class="w-full h-auto drop-shadow-2xl"
          />
        </div>
        
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left slide-in-left">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animated-gradient">{title}</h1>
          <p class="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-base-content">{subtitle}</p>
          <p class="text-base md:text-lg lg:text-xl mb-8 opacity-80 max-w-2xl mx-auto lg:mx-0 text-base-content">{description}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" class="btn btn-lg btn-primary text-white">{primaryCta}</a>
            <a href="#video" class="btn btn-lg btn-outline btn-primary hover:text-white">{secondaryCta}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideInZoomLeft {
    0% {
      opacity: 0;
      transform: translateX(-1000px) scale(0.8);
    }
    60% {
      opacity: 1;
      transform: translateX(0) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideInZoomRight {
    0% {
      opacity: 0;
      transform: translateX(1000px) scale(0.8);
    }
    60% {
      opacity: 1;
      transform: translateX(0) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  .slide-in-left {
    animation: slideInZoomLeft 1s ease-out forwards;
  }

  .slide-in-right {
    animation: slideInZoomRight 1s ease-out forwards;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animated-gradient {
    background-size: 200% 200%;
    animation: gradientShift 4s ease-in-out infinite;
  }
</style>
