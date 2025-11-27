<script>
  export let plans;
  export let title;
  export let subtitle;
</script>

<section id="pricing" class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p class="text-lg md:text-xl opacity-80">{subtitle}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {#each plans as plan (plan.id)}
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 {plan.highlighted ? 'ring-2 ring-primary' : ''}">
          <div class="card-body">
            {#if plan.badge}
              <div class="badge badge-primary badge-lg mb-2">{plan.badge}</div>
            {/if}
            
            <h3 class="card-title text-3xl mb-2">{plan.name}</h3>
            <p class="text-base opacity-80 mb-6">{plan.description}</p>
            
            <div class="divider"></div>
            
            <ul class="space-y-3 mb-6">
              {#each plan.features as feature}
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            
            <div class="card-actions justify-center mt-auto">
              <a 
                href={plan.ctaLink} 
                class="btn {plan.highlighted ? 'btn-primary text-white' : 'btn-outline btn-primary hover:text-white'} btn-lg w-full"
              >
                {plan.ctaText}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
