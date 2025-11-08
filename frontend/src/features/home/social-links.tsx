import { GithubIcon } from '@/components/icon-github';
import { LinkedinIcon } from '@/components/icon-linkedin';
import { Link } from '@tanstack/react-router';
import { Mail } from 'lucide-react';

const links = [
	{
		name: 'Email',
		url: 'mailto:tracey.king@hey.com',
		internal: false,
		icon: (
			<Mail className="group-hover:stroke-gray-400 opacity-0 animate-fade-in-bottom animation-delay-500" />
		),
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/traceyking14',
		internal: false,
		icon: (
			<LinkedinIcon className="h-[24px] w-[24px] opacity-0 group-hover:fill-gray-400 animate-fade-in-bottom animation-delay-600" />
		),
	},
	{
		name: 'GitHub',
		url: 'https://github.com/TFByrd',
		internal: false,
		icon: (
			<GithubIcon className="h-[24px] w-[24px] opacity-0 group-hover:fill-gray-400 animate-fade-in-bottom animation-delay-700" />
		),
	},
	// {
	// 	name: 'API Demo Names',
	// 	url: '/projects',
	// 	icon: <CodeXml className="group-hover:filter group-hover:invert" />,
	// 	internal: true,
	// },
];

export const SocialLinks = () => {
	return (
		<div className="flex flex-row gap-4">
			{links.map((link) =>
				link.internal ? (
					<Link
						className="border-black rounded-full flex items-center text-white hover:cursor-pointer"
						to={link.url}
						key={link.name}
						viewTransition={{ types: ['slide-left', 'home-grow'] }}
					>
						{link.icon}
					</Link>
				) : (
					<a
						className="group flex items-center border-black hover:cursor-pointer"
						target="_blank"
						rel="noreferrer"
						href={link.url}
						key={link.name}
					>
						{link.icon}
					</a>
				),
			)}
		</div>
	);
};
