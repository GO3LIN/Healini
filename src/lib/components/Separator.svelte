<script>
  export let variant = 'wave'; // wave, gradient, dots, zigzag
</script>

{#if variant === 'wave'}
  <div class="w-full h-24 relative overflow-hidden">
    <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,60 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.3"/>
      <path d="M0,80 C300,40 600,100 900,80 C1050,70 1150,90 1200,80 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.5"/>
    </svg>
  </div>
{:else if variant === 'gradient'}
  <div class="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
{:else if variant === 'diamond'}
  <div class="w-full py-8 flex justify-center items-center gap-4">
    <div class="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-purple-500"></div>
    <div class="w-3 h-3 rotate-45 bg-gradient-to-br from-purple-500 to-pink-500"></div>
    <div class="h-px w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
  </div>
{:else if variant === 'stripes'}
  <div class="w-full h-3 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40" 
         style="transform: skewY(-2deg); transform-origin: top left;"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30" 
         style="transform: skewY(2deg); transform-origin: bottom right; margin-top: 4px;"></div>
  </div>
{/if}
