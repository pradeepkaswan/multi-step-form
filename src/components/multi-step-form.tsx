import { FORM_STEPS } from "../constants"
import { useMultiStepForm } from "../hooks/use-multi-step-form"
import { PersonalInfo } from "./personal-info"
import { Summary } from "./summary"

export const MultiStepForm: React.FC = () => {
	const {
		currentStep,
		errors,
		formData,
		isSubmitted,
		handleInputChange,
		handleNextStep,
		handlePrevStep,
		handleSubmit,
	} = useMultiStepForm()

	// const handlePlanSelection = (planId: string) => {
	// 	setFormData((prevData) => ({ ...prevData, plan: planId }))
	// }

	// const handleBillingCycleToggle = () => {
	// 	setFormData((prevData) => ({
	// 		...prevData,
	// 		billingCycle: prevData.billingCycle === "monthly" ? "yearly" : "monthly",
	// 	}))
	// }

	// const handleAddOnToggle = (addOnId: string) => {
	// 	setFormData((prevData) => ({
	// 		...prevData,
	// 		addOns: prevData.addOns.includes(addOnId)
	// 			? prevData.addOns.filter((id) => id !== addOnId)
	// 			: [...prevData.addOns, addOnId],
	// 	}))
	// }

	const renderThankYouScreen = () => (
		<div className="flex flex-col items-center justify-center h-full text-center max-w-[450px]">
			<svg
				className="mb-8"
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 80 80"
			>
				<g fill="none">
					<circle
						cx="40"
						cy="40"
						r="40"
						fill="#F9818E"
					/>
					<path
						fill="#E96170"
						d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
					/>
					<path
						fill="#FFF"
						d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
					/>
				</g>
			</svg>
			<h2 className="font-bold text-lg mb-[14px]">Thank you!</h2>
			<p className="text-base font-normal text-neutral-cool-gray">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	)

	const renderStepContent = () => {
		if (isSubmitted) {
			return renderThankYouScreen()
		}

		switch (currentStep) {
			case 1:
				return (
					<PersonalInfo
						formData={formData}
						handleInputChange={handleInputChange}
						errors={errors}
					/>
				)
			case 2:
				return (
					<div>
						<h1 className="text-lg font-bold">Select your plan</h1>
						<p className="text-base font-normal text-neutral-cool-gray">
							You have the option of monthly or yearly billing.
						</p>
					</div>
				)
			case 3:
				return (
					<div>
						<h1 className="text-lg font-bold">Pick add-ons</h1>
						<p className="text-base font-normal text-neutral-cool-gray">
							Add-ons help enhance your gaming experience.
						</p>
					</div>
				)
			case 4:
				return <Summary formData={formData} />
			default:
				return null
		}
	}

	return (
		<div className="flex p-4 w-[940px] h-[600px] bg-neutral-white rounded-[15px] shadow-md">
			<div className="sidebar min-w-[274px] rounded-lg relative">
				<svg
					className="absolute w-full h-full inset-0 object-cover rounded-lg"
					xmlns="http://www.w3.org/2000/svg"
					width="274"
					height="568"
					fill="none"
					viewBox="0 0 274 568"
				>
					<rect
						width="274"
						height="568"
						fill="#483EFF"
						rx="10"
					/>
					<mask
						id="a"
						width="274"
						height="568"
						x="0"
						y="0"
						maskUnits="userSpaceOnUse"
						style={{ maskType: "alpha" }}
					>
						<rect
							width="274"
							height="568"
							fill="#fff"
							rx="10"
						/>
					</mask>
					<g mask="url(#a)">
						<path
							fill="#6259FF"
							fillRule="evenodd"
							d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
							clipRule="evenodd"
						/>
						<path
							fill="#F9818E"
							fillRule="evenodd"
							d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
							clipRule="evenodd"
						/>
						<path
							stroke="#fff"
							strokeLinecap="round"
							strokeLinejoin="bevel"
							strokeWidth="5"
							d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
						/>
						<path
							fill="#FFAF7E"
							d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
						/>
					</g>
				</svg>
				<div className="relative flex flex-col gap-8 px-8 py-9 uppercase">
					{FORM_STEPS.map((step) => (
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
								<p className="text-xs text-primary-light-blue">
									Step {step.id}
								</p>
								<p className="text-sm font-bold text-neutral-white">
									{step.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="mx-auto m-4">
				<form
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
					className="flex flex-col h-full"
				>
					<div className="flex-grow">
						{isSubmitted ? renderThankYouScreen() : renderStepContent()}
					</div>
					{!isSubmitted && (
						<div className="flex justify-between items-center mt-auto pt-4">
							<div className="w-1/2">
								{currentStep > 1 && (
									<button
										onClick={handlePrevStep}
										className="text-neutral-cool-gray cursor-pointer"
									>
										Go Back
									</button>
								)}
							</div>
							<div className="w-1/2 flex justify-end">
								<button
									type="button"
									onClick={currentStep === 4 ? handleSubmit : handleNextStep}
									className={`w-[123px] h-12 font-medium rounded-lg cursor-pointer text-neutral-white ${
										currentStep === 4
											? "bg-primary-purplish-blue hover:bg-[#928CFF]"
											: "bg-primary-marine-blue hover:bg-[#164A8A]"
									} `}
								>
									{currentStep === 4 ? "Confirm" : "Next Step"}
								</button>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	)
}
