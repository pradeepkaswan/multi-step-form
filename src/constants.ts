import { FormStep, Plan, AddOn } from "./types"

export const FORM_STEPS: FormStep[] = [
	{ id: 1, title: "Your info" },
	{ id: 2, title: "Select plan" },
	{ id: 3, title: "Add-ons" },
	{ id: 4, title: "Summary" },
]

export const PLANS: Plan[] = [
	{ id: "arcade", name: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
	{ id: "advanced", name: "Advanced", monthlyPrice: 12, yearlyPrice: 120 },
	{ id: "pro", name: "Pro", monthlyPrice: 15, yearlyPrice: 150 },
]

export const ADD_ONS: AddOn[] = [
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
