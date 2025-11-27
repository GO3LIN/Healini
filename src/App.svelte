<script>
  import Navigation from './lib/components/Navigation.svelte';
  import Hero from './lib/components/Hero.svelte';
  import VideoSection from './lib/components/VideoSection.svelte';
  import FeaturesSection from './lib/components/FeaturesSection.svelte';
  import PricingSection from './lib/components/PricingSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Separator from './lib/components/Separator.svelte';
  
  import { content } from './lib/data/content.js';
  import { features } from './lib/data/features.js';
  import { pricingPlans } from './lib/data/pricing.js';
</script>

<div class="min-h-screen">
  <!-- Skip to main content link for accessibility -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn btn-primary">
    Aller au contenu principal
  </a>
  
  <Navigation />
  
  <main id="main-content">
    <Hero
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      description={content.hero.description}
      primaryCta={content.hero.primaryCta}
      secondaryCta={content.hero.secondaryCta}
    />
    
    <Separator variant="wave" />
    
    <VideoSection
      videoUrl="https://youtu.be/_SbIJQlhEe4"
      title={content.video.title}
      description={content.video.description}
    />
    
    <Separator variant="gradient" />
    
    <FeaturesSection
      {features}
      title={content.features.title}
      subtitle={content.features.subtitle}
    />
    
    <Separator variant="diamond" />
    
    <PricingSection
      plans={pricingPlans}
      title={content.pricing.title}
      subtitle={content.pricing.subtitle}
    />
    
    <Separator variant="stripes" />
    
    <ContactSection
      email={content.contact.email}
      phone={content.contact.phone}
      title={content.contact.title}
      subtitle={content.contact.subtitle}
    />
  </main>
  
  <Footer
    companyName={content.footer.companyName}
    tagline={content.footer.tagline}
    copyright={content.footer.copyright}
    email={content.contact.email}
    phone={content.contact.phone}
  />
</div>
