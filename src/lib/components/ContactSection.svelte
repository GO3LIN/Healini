<script>
  export let email;
  export let phone;
  export let title;
  export let subtitle;

  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  let errors = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  let isSubmitting = false;
  let submitSuccess = false;
  let submitError = false;

  function validateName(value) {
    if (!value || value.trim().length === 0) {
      return 'Ce champ est obligatoire';
    }
    if (value.trim().length < 2) {
      return 'Ce champ doit contenir au moins 2 caractères';
    }
    if (value.length > 100) {
      return 'Ce champ ne peut pas dépasser 100 caractères';
    }
    return '';
  }

  function validateEmail(value) {
    if (!value || value.trim().length === 0) {
      return 'Ce champ est obligatoire';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Veuillez entrer une adresse email valide';
    }
    return '';
  }

  function validatePhone(value) {
    if (value && value.trim().length > 0) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(value)) {
        return 'Veuillez entrer un numéro de téléphone valide';
      }
    }
    return '';
  }

  function validateMessage(value) {
    if (!value || value.trim().length === 0) {
      return 'Ce champ est obligatoire';
    }
    if (value.trim().length < 10) {
      return 'Ce champ doit contenir au moins 10 caractères';
    }
    if (value.length > 2000) {
      return 'Ce champ ne peut pas dépasser 2000 caractères';
    }
    return '';
  }

  function handleBlur(field) {
    switch(field) {
      case 'name':
        errors.name = validateName(formData.name);
        break;
      case 'email':
        errors.email = validateEmail(formData.email);
        break;
      case 'phone':
        errors.phone = validatePhone(formData.phone);
        break;
      case 'message':
        errors.message = validateMessage(formData.message);
        break;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    errors.name = validateName(formData.name);
    errors.email = validateEmail(formData.email);
    errors.phone = validatePhone(formData.phone);
    errors.message = validateMessage(formData.message);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    
    if (hasErrors) {
      return;
    }

    isSubmitting = true;
    submitSuccess = false;
    submitError = false;

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      submitSuccess = true;
      formData = { name: '', email: '', phone: '', message: '' };
    } catch (error) {
      submitError = true;
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p class="text-lg md:text-xl opacity-80">{subtitle}</p>
    </div>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Illustration -->
        <div class="hidden lg:block">
          <img 
            src="/contact-illustration.svg" 
            alt="Contactez-nous" 
            class="w-full h-auto drop-shadow-xl"
          />
        </div>

        <!-- Contact Form -->
        <div class="gradient-border-wrapper">
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body p-6 md:p-8">
          <form on:submit={handleSubmit} novalidate class="space-y-4">
            <!-- Name Field -->
            <div class="form-control w-full">
              <label class="input input-bordered w-full {errors.name ? 'input-error' : ''}">
                <span class="label">Nom complet *</span>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  on:blur={() => handleBlur('name')}
                  placeholder="Votre nom"
                  class="grow w-full"
                />
              </label>
              {#if errors.name}
                <div class="label">
                  <span class="label-text-alt text-error">{errors.name}</span>
                </div>
              {/if}
            </div>

            <!-- Email Field -->
            <div class="form-control w-full">
              <label class="input input-bordered w-full {errors.email ? 'input-error' : ''}">
                <span class="label">Email *</span>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  on:blur={() => handleBlur('email')}
                  placeholder="votre@email.com"
                  class="grow w-full"
                />
              </label>
              {#if errors.email}
                <div class="label">
                  <span class="label-text-alt text-error">{errors.email}</span>
                </div>
              {/if}
            </div>

            <!-- Phone Field -->
            <div class="form-control w-full">
              <label class="input input-bordered w-full {errors.phone ? 'input-error' : ''}">
                <span class="label">Téléphone</span>
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  on:blur={() => handleBlur('phone')}
                  placeholder="+212 6 12 34 56 78"
                  class="grow w-full"
                />
              </label>
              {#if errors.phone}
                <div class="label">
                  <span class="label-text-alt text-error">{errors.phone}</span>
                </div>
              {/if}
            </div>

            <!-- Message Field -->
            <div class="form-control w-full">
              <textarea
                id="message"
                bind:value={formData.message}
                on:blur={() => handleBlur('message')}
                placeholder="Parlez-nous de votre projet, vos besoins, ou posez-nous vos questions..."
                maxlength="2000"
                class="textarea p-5 textarea-bordered w-full min-h-64 resize-none {errors.message ? 'textarea-error' : ''}"
              ></textarea>
              {#if errors.message}
                <div class="label">
                  <span class="label-text-alt text-error">{errors.message}</span>
                </div>
              {/if}
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button
                type="submit"
                class="cta-button w-full btn-lg text-white font-bold"
                disabled={isSubmitting}
              >
                {#if isSubmitting}
                  <span class="loading loading-spinner"></span>
                  Envoi en cours...
                {:else}
                  Envoyer
                {/if}
              </button>
            </div>

            <!-- Success Message -->
            {#if submitSuccess}
              <div class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Message envoyé avec succès! Nous vous contacterons bientôt.</span>
              </div>
            {/if}

            <!-- Error Message -->
            {#if submitError}
              <div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Une erreur s'est produite. Veuillez réessayer.</span>
              </div>
            {/if}
          </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .gradient-border-wrapper {
    position: relative;
    padding: 3px;
    border-radius: 1.5rem;
    background: linear-gradient(
      90deg,
      #3b82f6,
      #8b5cf6,
      #ec4899,
      #f59e0b,
      #3b82f6
    );
    background-size: 400% 400%;
    animation: gradientShift 10s ease-in-out infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .gradient-border-wrapper .card {
    border-radius: calc(1.5rem - 3px);
    box-shadow: none;
    margin: 0;
  }

  .cta-button {
    position: relative;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    overflow: hidden;
  }

  .cta-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(139, 92, 246, 0.5);
    filter: brightness(1.15);
  }

  .cta-button:active:not(:disabled) {
    transform: translateY(0);
  }

  .cta-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
</style>
