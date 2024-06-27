import { memo } from "react"

type FormNavigationProps = {
	currentStep: number
	handlePrevStep: () => void
	handleNextStep: () => void
}

const FormNavigation = memo(
	({ currentStep, handlePrevStep, handleNextStep }: FormNavigationProps) => (
		<div className="flex justify-between items-center">
			<div className="w-1/2">
				{currentStep > 1 && (
					<button
						onClick={handlePrevStep}
						className="text-neutral-cool-gray"
					>
						Go Back
					</button>
				)}
			</div>
			<div className="w-1/2 flex justify-end">
				<button
					onClick={handleNextStep}
					className={`px-6 py-4 font-medium rounded-lg cursor-pointer text-neutral-white ${
						currentStep === 4
							? "bg-primary-purplish-blue"
							: "bg-primary-marine-blue"
					}  `}
				>
					{currentStep === 4 ? "Confirm" : "Next Step"}
				</button>
			</div>
		</div>
	),
)

export default FormNavigation
