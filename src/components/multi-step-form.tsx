import { useState } from "react"
import { AddOn, FormData, Plan } from "../types"
import FormNavigation from "./form-navigation"
import Sidebar from "./sidebar"

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

	const handlePlanSelection = (planId: string) => {
		setFormData((prevData) => ({ ...prevData, plan: planId }))
	}

	const handleBillingCycleToggle = () => {
		setFormData((prevData) => ({
			...prevData,
			billingCycle: prevData.billingCycle === "monthly" ? "yearly" : "monthly",
		}))
	}

	const handleAddOnToggle = (addOnId: string) => {
		setFormData((prevData) => ({
			...prevData,
			addOns: prevData.addOns.includes(addOnId)
				? prevData.addOns.filter((id) => id !== addOnId)
				: [...prevData.addOns, addOnId],
		}))
	}

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
		<div className="flex min-h-screen justify-center items-center">
			<div className="flex p-4 w-[940px] h-[600px] bg-neutral-white rounded-[15px] shadow-md">
				<Sidebar currentStep={currentStep} />
				<div className="ml-[100px] my-4">
					<form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
							e.preventDefault()
						}
						className="flex flex-col h-full"
					>
						<div className="flex-grow">{renderStepContent()}</div>
						<FormNavigation
							currentStep={currentStep}
							handlePrevStep={handlePrevStep}
							handleNextStep={handleNextStep}
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default MultiStepForm
