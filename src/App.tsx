import MultiStepForm from "./components/multi-step-form"

function App() {
	return (
		<div className="flex flex-col min-h-screen justify-center items-center">
			<MultiStepForm />
			<footer>
				<div className="attribution mt-2">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="#">Pradeep Kaswan</a>.
				</div>
			</footer>
		</div>
	)
}

export default App
