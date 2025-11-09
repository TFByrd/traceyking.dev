import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';

import appCss from '../styles.css?url';
import { Devtools } from '@/components/devtools';
import { PostHog } from '@/components/posthog-provider';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{	
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Tracey King',
			},
			{
				name: 'description',
				content: 'Tracey King\'s portfolio'
			}
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
			{
				rel: 'icon',
				href: 'code.svg'
			}
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<head>
				<HeadContent />
			</head>
			<body className="h-dvh">
					{children}
				<Devtools />
				<Scripts />
				<PostHog />
			</body>
		</html>
	);
}
