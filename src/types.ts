export type FormStep = {
	id: number
	title: string
}

export type Plan = {
	id: string
	name: string
	monthlyPrice: number
	yearlyPrice: number
}

export type AddOn = {
	id: string
	name: string
	description: string
	monthlyPrice: number
	yearlyPrice: number
}

export type BillingCycle = "monthly" | "yearly"

export type FormData = {
	name: string
	email: string
	phone: string
	plan: string
	billingCycle: BillingCycle
	addOns: string[]
}
