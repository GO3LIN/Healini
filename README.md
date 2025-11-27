# Healini Landing Page

Page vitrine pour l'application de gestion de cabinet médical Healini.

## Technologies

- **Svelte 5** - Framework frontend
- **TailwindCSS** - Styling
- **DaisyUI** - Composants UI
- **Vite** - Build tool

## Structure du Projet

```
frontend-landing/
├── src/
│   ├── lib/
│   │   ├── components/     # Composants Svelte
│   │   ├── data/          # Données de contenu
│   │   └── utils/         # Utilitaires
│   ├── App.svelte         # Composant principal
│   └── main.js            # Point d'entrée
├── public/                # Assets statiques
└── dist/                  # Build de production
```

## Développement

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Sections de la Page

1. **Hero** - Section d'accueil avec CTA
2. **Vidéo** - Tutoriel vidéo
3. **Fonctionnalités** - Liste des fonctionnalités principales
4. **Tarifs** - Plans d'hébergement (sur site / cloud)
5. **Contact** - Formulaire de contact
6. **Footer** - Informations de l'entreprise

## Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation sticky avec menu mobile
- ✅ Validation de formulaire
- ✅ Optimisations de performance
- ✅ Accessibilité (WCAG AA)
- ✅ Smooth scrolling
- ✅ Lazy loading

## Configuration

Le contenu de la page peut être modifié dans les fichiers suivants:

- `src/lib/data/content.js` - Textes et labels
- `src/lib/data/features.js` - Liste des fonctionnalités
- `src/lib/data/pricing.js` - Plans tarifaires

## Déploiement

Le projet génère des fichiers statiques qui peuvent être déployés sur:

- Netlify
- Vercel
- GitHub Pages
- Tout hébergement de fichiers statiques
