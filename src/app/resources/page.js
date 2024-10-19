import React from 'react';

const resources = [
    {
        title: 'National Suicide Prevention Lifeline',
        description: 'A free, 24/7 service that can provide support, information, and resources for you.',
        link: 'https://suicidepreventionlifeline.org/',
    },
    {
        title: 'SAMHSA’s National Helpline',
        description: 'A confidential, free, 24/7 information service for individuals and family members facing mental and/or substance use disorders.',
        link: 'https://www.samhsa.gov/find-help/national-helpline',
    },
    {
        title: 'NAMI HelpLine',
        description: 'A free, nationwide service that offers information, resource referrals, and support for individuals affected by mental illness.',
        link: 'https://nami.org/help',
    },
    {
        title: 'MentalHealth.gov',
        description: 'Provides one-stop access to U.S. government mental health and substance use information.',
        link: 'https://www.mentalhealth.gov/',
    },
    {
        title: 'Crisis Text Line',
        description: 'Text HOME to 741741 for free, 24/7 crisis support in the U.S.',
        link: 'https://www.crisistextline.org/',
    },
];

const ResourcesPage = () => {
    return (
        <div>
            <h2 className="text-2xl mb-4">Mental Health Resources</h2>
            <ul className="space-y-4">
                {resources.map((resource, index) => (
                    <li key={index} className="p-4 border rounded bg-white shadow">
                        <h3 className="font-bold underline-offset-1 underline text-black">{resource.title}</h3>
                        <p className="text-black">{resource.description}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            Visit Resource
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesPage;
