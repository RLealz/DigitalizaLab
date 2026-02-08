import { Bot, Workflow, LineChart, ShieldCheck, Lock } from 'lucide-react';

/**
 * Feature cards displayed in the Features section.
 * The first feature (index 0) is styled as a highlighted card.
 */
export const features = [
    {
        title: 'Custom AI agent engineering',
        description:
            'We design, deploy, and maintain custom AI agents specifically tailored to your business growth goals.',
        icon: Bot,
        hasArrow: true,
    },
    {
        title: 'Fully Managed automation pipelines',
        description:
            'Robust data infrastructure and ingestion processes are a critical component in how we build out our systems.',
        icon: Workflow,
    },
    {
        title: 'Performance analytic dashboard',
        description:
            "Easily track ROI and efficiency gains with custom metrics on your AI agent's performance.",
        icon: LineChart,
    },
    {
        title: 'Intelligent access control',
        description:
            'Manage agent permissions with your teams to ensure secure operations across your organization.',
        icon: ShieldCheck,
    },
    {
        title: 'Secure and compliant protocols',
        description:
            'Technology architecture that is fully hosted in the cloud, ensuring compliance with SOC-2, ISO, and other industry standards.',
        icon: Lock,
    },
];
