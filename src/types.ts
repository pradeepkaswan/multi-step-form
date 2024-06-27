export interface FormStep {
	id: number
	title: string
}

export interface FormData {
	name: string
	email: string
	phone: string
	plan: string
	billingCycle: "monthly" | "yearly"
	addOns: string[]
}

export interface Plan {
	id: string
	name: string
	monthlyPrice: number
	yearlyPrice: number
}

export interface AddOn {
	id: string
	name: string
	description: string
	monthlyPrice: number
	yearlyPrice: number
}
