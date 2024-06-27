import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"
import { FormStep } from "../types"

const formSteps: FormStep[] = [
	{
		id: 1,
		title: "Your info",
	},
	{
		id: 2,
		title: "Select plan",
	},
	{
		id: 3,
		title: "Add-ons",
	},
	{
		id: 4,
		title: "Summary",
	},
]

const Sidebar = ({ currentStep }: { currentStep: number }) => {
	return (
		<div className="w-[274px] rounded-lg relative">
			<img
				src={bgSidebarDesktop}
				className="absolute w-full h-full inset-0 object-cover rounded-lg"
				alt=""
			/>
			<div className="relative flex flex-col gap-8 px-8 py-9 uppercase">
				{formSteps.map((step) => (
					<div
						key={step.id}
						className="flex items-center gap-4"
					>
						<div
							className={`w-[33px] h-[33px] rounded-full border flex items-center justify-center font-bold text-sm ${
								currentStep === step.id
									? "bg-primary-light-blue border-primary-light-blue"
									: "border-neutral-white text-neutral-white"
							}`}
						>
							{step.id}
						</div>
						<div>
							<p className="text-xs text-primary-light-blue">Step {step.id}</p>
							<p className="text-sm font-bold text-neutral-white">
								{step.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Sidebar
