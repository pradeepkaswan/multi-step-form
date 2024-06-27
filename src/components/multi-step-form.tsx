import { useState } from "react"
import { FormData, FormStep } from "../types"
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"

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

// const plans: Plan[] = [
// 	{
// 		id: "arcade",
// 		name: "Arcade",
// 		monthlyPrice: 9,
// 		yearlyPrice: 90,
// 	},
// 	{
// 		id: "advanced",
// 		name: "Advanced",
// 		monthlyPrice: 12,
// 		yearlyPrice: 120,
// 	},
// 	{
// 		id: "pro",
// 		name: "Pro",
// 		monthlyPrice: 15,
// 		yearlyPrice: 150,
// 	},
// ]

// const addOns: AddOn[] = [
// 	{
// 		id: "online",
// 		name: "Online service",
// 		description: "Access to multiplayer games",
// 		monthlyPrice: 1,
// 		yearlyPrice: 10,
// 	},
// 	{
// 		id: "storage",
// 		name: "Larger storage",
// 		description: "Extra 1TB of cloud save",
// 		monthlyPrice: 2,
// 		yearlyPrice: 20,
// 	},
// 	{
// 		id: "customizable",
// 		name: "Customizable profile",
// 		description: "Custom theme on your profile",
// 		monthlyPrice: 2,
// 		yearlyPrice: 20,
// 	},
// ]

const MultiStepForm = () => {
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		plan: "arcade",
		billingCycle: "monthly",
		addOns: [],
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

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

	const handleNextStep = () => {
		setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
	}

	const handlePrevStep = () => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}

	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="space-y-4">
						<div>
							<h2 className="text-lg font-bold">Personal info</h2>
							<p className="text-base font-normal text-neutral-cool-gray">
								Please provide your name, email address, and phone number.
							</p>
						</div>
						<div className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="block text-sm"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="e.g. Stephen King"
									className="w-full border border-neutral-light-gray rounded-md px-3 h-12"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="block text-sm"
								>
									Email Address
								</label>
								<input
									type="text"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="e.g. stephenking@lorem.com"
									className="w-full border border-neutral-light-gray rounded-md px-3 h-12"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="phone"
									className="block text-sm"
								>
									Phone Number
								</label>
								<input
									type="text"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									placeholder="e.g. +1 234 567 890"
									className="w-full border border-neutral-light-gray rounded-md px-3 h-12"
								/>
							</div>
						</div>
					</div>
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
				return (
					<div>
						<h1 className="text-lg font-bold">Finishing up</h1>
						<p className="text-base font-normal text-neutral-cool-gray">
							Double-check everything looks OK before confirming.
						</p>
					</div>
				)
		}
	}

	return (
		<div className="flex p-4 w-[940px] h-[600px] bg-neutral-white rounded-[15px] shadow-md">
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
			<div className="ml-[100px] my-4">
				<form
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
					className="flex flex-col h-full"
				>
					<div className="flex-grow">{renderStepContent()}</div>
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
				</form>
			</div>
		</div>
	)
}

export default MultiStepForm
