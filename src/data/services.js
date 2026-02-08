import { Bot, Workflow, LineChart, ShieldCheck, Lock } from 'lucide-react';

/**
 * Services displayed in the Services section.
 * These mirror the core capabilities from features, presented as service offerings.
 */
export const services = [
    {
        title: 'Custom AI Agent Engineering',
        description:
            'We design, deploy, and maintain custom AI agents specifically tailored to your business growth goals.',
        icon: Bot,
    },
    {
        title: 'Managed Automation Pipelines',
        description:
            'End-to-end data infrastructure and ingestion processes built and maintained by our engineering team.',
        icon: Workflow,
    },
    {
        title: 'Performance Analytics',
        description:
            "Track ROI and efficiency gains with custom dashboards and metrics on your AI agent's performance.",
        icon: LineChart,
    },
    {
        title: 'Access Control & Permissions',
        description:
            'Enterprise-grade agent permission management to ensure secure operations across your organization.',
        icon: ShieldCheck,
    },
    {
        title: 'Compliance & Security',
        description:
            'Cloud-hosted architecture ensuring compliance with SOC-2, ISO, and other industry standards.',
        icon: Lock,
    },
];
