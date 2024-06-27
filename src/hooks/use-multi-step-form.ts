import { useState } from "react"
import { FormData } from "../types"

export const useMultiStepForm = () => {
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
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}
		if (!formData.name) newErrors.name = "This field is required"
		if (!formData.email) newErrors.email = "This field is required"
		if (!formData.phone) newErrors.phone = "This field is required"
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleNextStep = () => {
		if (validateForm()) {
			setCurrentStep((prevStep) => Math.min(prevStep + 1, 4))
		}
	}

	const handlePrevStep = () => {
		setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
	}

	const handleSubmit = () => {
		if (validateForm()) {
			setIsSubmitted(true)
		}
	}

	return {
		currentStep,
		errors,
		formData,
		isSubmitted,
		handleInputChange,
		handleNextStep,
		handlePrevStep,
		handleSubmit,
		setFormData,
	}
}
