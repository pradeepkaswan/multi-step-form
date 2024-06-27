interface PlanSelectionProps {}

export const PlanSelection: React.FC<PlanSelectionProps> = () => {
	return (
		<div>
			<h1 className="text-lg font-bold">Select your plan</h1>
			<p className="text-base font-normal text-neutral-cool-gray">
				You have the option of monthly or yearly billing.
			</p>
		</div>
	)
}
