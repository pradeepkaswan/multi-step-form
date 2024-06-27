import { PLANS, ADD_ONS } from "../constants"
import { FormData, Plan, AddOn } from "../types"

interface SummaryProps {
	formData: FormData
}

export const Summary: React.FC<SummaryProps> = ({ formData }) => {
	const calculateTotal = (): number => {
		const selectedPlan = PLANS.find((p) => p.id === formData.plan) as Plan
		const planPrice =
			formData.billingCycle === "monthly"
				? selectedPlan.monthlyPrice
				: selectedPlan.yearlyPrice
		const addOnsPrice = formData.addOns.reduce((total, addOnId) => {
			const addOn = ADD_ONS.find((a) => a.id === addOnId) as AddOn
			return (
				total +
				(formData.billingCycle === "monthly"
					? addOn.monthlyPrice
					: addOn.yearlyPrice)
			)
		}, 0)

		return planPrice + addOnsPrice
	}

	return (
		<div className="space-y-[35px]">
			<div>
				<h1 className="text-lg font-bold">Finishing up</h1>
				<p className="text-base font-normal text-neutral-cool-gray">
					Double-check everything looks OK before confirming.
				</p>
			</div>
			<div className="space-y-6">
				<div className="py-4 px-6 bg-neutral-alabaster rounded-lg">
					{/* Add selected plan and add-ons details here */}
				</div>
				<div className="flex justify-between items-center">
					<p className="text-neutral-cool-gray text-sm">
						Total (per {formData.billingCycle === "monthly" ? "month" : "year"})
					</p>
					<p className="text-[20px] font-bold text-primary-purplish-blue">
						+${calculateTotal()}/
						{formData.billingCycle === "monthly" ? "mo" : "yr"}
					</p>
				</div>
			</div>
		</div>
	)
}
