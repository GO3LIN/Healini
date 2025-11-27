export const pricingPlans = [
  {
    id: 'on-premise',
    name: 'Installation Sur Site',
    description: 'Hébergement local dans votre établissement médical',
    features: [
      'Données stockées localement',
      'Contrôle total de l\'infrastructure',
      'Installation et configuration incluses',
      'Support technique dédié',
      'Mises à jour régulières',
      'Formation du personnel'
    ],
    highlighted: false,
    ctaText: 'Demander un Devis',
    ctaLink: '#contact',
    badge: null
  },
  {
    id: 'cloud',
    name: 'Hébergement Cloud',
    description: '300 DH/mois par médecin',
    features: [
      'Accès depuis n\'importe quel appareil',
      'Sauvegardes automatiques',
      'Mises à jour instantanées',
      'Sécurité renforcée',
      'Support 24/7',
      'Évolutivité garantie'
    ],
    highlighted: true,
    ctaText: 'S\'abonner Maintenant',
    ctaLink: '#contact',
    badge: 'Populaire'
  }
];
