import { SocialLinks } from '@/features/home/social-links';
import { createFileRoute } from '@tanstack/react-router';
import Headshot from '@/assets/images/headshot.jpeg?w=150&h=150&format=webp&imagetools'

export const Route = createFileRoute('/')({
	component: App,
});

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="flex flex-row">
				<img
					className="rounded-full grayscale h-25 z-1 animate-fade-in-left"
					src={Headshot}
					alt="Headshot"
				/>
				<div className="ml-2 text-left flex flex-col justify-between [clip-path:border-box] [view-transition-name:container]">
					<div>
						<p className="font-extrabold opacity-[0.01] text-xl animate-fade-in-right animation-delay-200">
							Tracey King
						</p>
						<div className="flex gap-1 font-thin text-lg whitespace-nowrap *:opacity-0">
							<span className="animate-fade-in-right animation-delay-300">
								Create.
							</span>
							<span className="animate-fade-in-right animation-delay-500">
								Innovate.
							</span>
							<span className="animate-fade-in-right animation-delay-800">
								Repeat.
							</span>
						</div>
					</div>
					<SocialLinks />
				</div>
			</div>
		</div>
	);
}
