/**
 * Pricing plans displayed in the Pricing section.
 * The plan with `isPopular: true` gets highlighted styling.
 */
export const pricingPlans = [
    {
        name: 'Starter',
        price: '$2,500',
        period: '/month',
        description: 'For small teams getting started with AI automation.',
        features: [
            '1 custom AI agent',
            'Basic automation pipeline',
            'Monthly performance reports',
            'Email support',
            'Cloud-hosted infrastructure',
        ],
        cta: 'Get Started',
        isPopular: false,
    },
    {
        name: 'Professional',
        price: '$7,500',
        period: '/month',
        description: 'For growing businesses scaling their AI capabilities.',
        features: [
            'Up to 5 AI agents',
            'Advanced automation pipelines',
            'Real-time analytics dashboard',
            'Priority support',
            'Intelligent access control',
            'Weekly optimization reviews',
        ],
        cta: 'Get Started',
        isPopular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Full-scale AI transformation for large organizations.',
        features: [
            'Unlimited AI agents',
            'Fully managed pipelines',
            'Custom integrations',
            'Dedicated account manager',
            'SOC-2 & ISO compliance',
            'SLA guarantee',
            '24/7 priority support',
        ],
        cta: 'Contact Sales',
        isPopular: false,
    },
];
