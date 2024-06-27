import { FormData } from "../types"

interface PersonalInfoProps {
	formData: FormData
	errors: { [key: string]: string }
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
	formData,
	errors,
	handleInputChange,
}) => (
	<div className="space-y-[35px]">
		<div>
			<h2 className="text-lg font-bold">Personal info</h2>
			<p className="text-base font-normal text-neutral-cool-gray">
				Please provide your name, email address, and phone number.
			</p>
		</div>
		<div className="space-y-6">
			{["name", "email", "phone"].map((field) => (
				<div
					key={field}
					className="space-y-2"
				>
					<div className="flex justify-between items-center">
						<label
							htmlFor={field}
							className="block text-sm"
						>
							{field.charAt(0).toUpperCase() + field.slice(1)}
						</label>
						{errors[field] && (
							<p className="text-sm font-bold text-primary-strawberry-red">
								{errors[field]}
							</p>
						)}
					</div>
					<input
						type={
							field === "email" ? "email" : field === "phone" ? "tel" : "text"
						}
						id={field}
						name={field}
						value={formData[field as keyof FormData]}
						onChange={handleInputChange}
						placeholder={`e.g. ${
							field === "name"
								? "Stephen King"
								: field === "email"
								? "stephenking@lorem.com"
								: "+1 234 567 890"
						}`}
						className={`w-full bg-neutral-white border ${
							errors[field]
								? "border-primary-strawberry-red"
								: "border-neutral-light-gray"
						} hover:border-primary-purplish-blue focus:border-primary-purplish-blue rounded-lg px-3 h-12`}
					/>
				</div>
			))}
		</div>
	</div>
)
