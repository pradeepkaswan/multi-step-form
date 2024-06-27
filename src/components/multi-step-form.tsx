import { useState } from "react"
import { AddOn, FormData, FormStep, Plan } from "../types"
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

const plans: Plan[] = [
	{
		id: "arcade",
		name: "Arcade",
		monthlyPrice: 9,
		yearlyPrice: 90,
	},
	{
		id: "advanced",
		name: "Advanced",
		monthlyPrice: 12,
		yearlyPrice: 120,
	},
	{
		id: "pro",
		name: "Pro",
		monthlyPrice: 15,
		yearlyPrice: 150,
	},
]

const addOns: AddOn[] = [
	{
		id: "online",
		name: "Online service",
		description: "Access to multiplayer games",
		monthlyPrice: 1,
		yearlyPrice: 10,
	},
	{
		id: "storage",
		name: "Larger storage",
		description: "Extra 1TB of cloud save",
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
	{
		id: "customizable",
		name: "Customizable profile",
		description: "Custom theme on your profile",
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
]

const MultiStepForm = () => {
	const [currentStep, setCurrentStep] = useState<number>(1)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		plan: "arcade",
		billingCycle: "monthly",
		addOns: [],
	})

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}

		if (!formData.name) {
			newErrors.name = "This field is required"
		}

		if (!formData.email) {
			newErrors.email = "This field is required"
		}

		if (!formData.phone) {
			newErrors.phone = "This field is required"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

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
		if (validateForm()) {
			setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
		}
	}

	const handlePrevStep = () => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}

	const calculateTotal = (): number => {
		const selectedPlan = plans.find((p) => p.id === formData.plan)
		if (!selectedPlan) return 0

		const planPrice =
			formData.billingCycle === "monthly"
				? selectedPlan.monthlyPrice
				: selectedPlan.yearlyPrice
		const addOnsPrice = formData.addOns.reduce((total, addOnId) => {
			const addOn = addOns.find((a) => a.id === addOnId)
			return (
				total +
				(addOn
					? formData.billingCycle === "monthly"
						? addOn.monthlyPrice
						: addOn.yearlyPrice
					: 0)
			)
		}, 0)

		return planPrice + addOnsPrice
	}

	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="space-y-[35px]">
						<div>
							<h2 className="text-lg font-bold">Personal info</h2>
							<p className="text-base font-normal text-neutral-cool-gray">
								Please provide your name, email address, and phone number.
							</p>
						</div>
						<div className="space-y-6">
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<label
										htmlFor="name"
										className="block text-sm"
									>
										Name
									</label>
									{errors.name && (
										<p className="text-sm font-bold text-primary-strawberry-red">
											{errors.name}
										</p>
									)}
								</div>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="e.g. Stephen King"
									className={`w-full bg-neutral-white border ${
										errors.name
											? "border-primary-strawberry-red"
											: "border-neutral-light-gray"
									}  hover:border-primary-purplish-blue focus:border-primary-purplish-blue rounded-lg px-3 h-12`}
								/>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<label
										htmlFor="email"
										className="block text-sm"
									>
										Email Address
									</label>
									{errors.email && (
										<p className="text-sm font-bold text-primary-strawberry-red">
											{errors.email}
										</p>
									)}
								</div>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="e.g. stephenking@lorem.com"
									className={`w-full bg-neutral-white border ${
										errors.name
											? "border-primary-strawberry-red"
											: "border-neutral-light-gray"
									}  hover:border-primary-purplish-blue focus:border-primary-purplish-blue rounded-lg px-3 h-12`}
								/>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<label
										htmlFor="phone"
										className="block text-sm"
									>
										Phone Number
									</label>
									{errors.phone && (
										<p className="text-sm font-bold text-primary-strawberry-red">
											{errors.phone}
										</p>
									)}
								</div>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									placeholder="e.g. +1 234 567 890"
									className={`w-full bg-neutral-white border ${
										errors.name
											? "border-primary-strawberry-red"
											: "border-neutral-light-gray"
									}  hover:border-primary-purplish-blue focus:border-primary-purplish-blue rounded-lg px-3 h-12`}
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
					<div className="space-y-[35px]">
						<div>
							<h1 className="text-lg font-bold">Finishing up</h1>
							<p className="text-base font-normal text-neutral-cool-gray">
								Double-check everything looks OK before confirming.
							</p>
						</div>
						<div className="space-y-6">
							<div className="py-4 px-6 bg-neutral-alabaster rounded-lg"></div>
							<div className="flex justify-between items-center">
								<p className="text-neutral-cool-gray text-sm">
									Total (per{" "}
									{formData.billingCycle === "monthly" ? "month" : "year"})
								</p>
								<p className="text-[20px] font-bold text-primary-purplish-blue">
									+${calculateTotal()}/
									{formData.billingCycle === "monthly" ? "mo" : "yr"}
								</p>
							</div>
						</div>
					</div>
				)
			default:
				return null
		}
	}

	return (
		<div className="flex p-4 w-[940px] h-[600px] bg-neutral-white rounded-[15px] shadow-md">
			<div className="sidebar w-[274px] rounded-lg relative">
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
			<div className="mx-auto m-4">
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
									className="text-neutral-cool-gray cursor-pointer"
								>
									Go Back
								</button>
							)}
						</div>
						<div className="w-1/2 flex justify-end">
							<button
								onClick={handleNextStep}
								className={`w-[123px] h-12 font-medium rounded-lg cursor-pointer text-neutral-white ${
									currentStep === 4
										? "bg-primary-purplish-blue hover:bg-[#928CFF]"
										: "bg-primary-marine-blue hover:bg-[#164A8A]"
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
