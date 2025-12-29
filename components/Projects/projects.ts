export const projects: Project[] = [
	{
		name: "PCA Reconstruction",
		summary: "The project applies PCA to reduce and reconstruct both normal and spectral images. It studies information redundancy, evaluates reconstruction quality with error metrics, and visualizes results to see how well PCA preserves important image information.",
		// url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/PCA-Reconstruction",
		tools: ["Python", "scikit-learn", "plotly", "NumPy", "OpenCV", "Matplotlib"],
	},
	{
		name: "PathMNIST Interpretability",
		summary: "This project explores model interpretability on the PathMNIST dataset by visualizing how ResNet (CNN) and Vision Transformer (ViT) models make decisions. Grad-CAM is used to highlight important regions in CNN predictions, while attention maps are visualized to understand how ViTs focus on different image regions, enabling a comparison of interpretability across architectures.",
		// url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/pathmnist-interpretability",
		tools: ["Python", "PyTorch", "MedMNIST/PathMNIST", "Vision Transformers (ViT)", "Grad-CAM", "ResNet", "NumPy", "OpenCV", "Matplotlib"],
	},
	{
		name: "PathMNIST Foundation Models",
		summary: "This compares the performance of CNNs, ResNet, and Vision Transformers (ViT) on the PathMNIST medical image dataset. The project focuses on training, evaluation, and error analysis using confusion matrices to understand class-wise behavior and architectural differences.",
		// url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/pathmnist-foundation-models",
		tools: ["Python", "PyTorch", "MedMNIST/PathMNIST", "NumPy", "scikit-learn", "Matplotlib"],
	},
	{
		name: "InnovaAI Landing Page",
		summary: "Pixel-perfect React/TypeScript landing page that recreates the InnovaAI Figma mock-up, showcasing meticulous attention to layout details and smooth micro-animations powered by the AOS library, all built with Chakra UI on Vite.",
		url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/AI_Solutions_LandingPage",
		tools: ["React", "TypeScript", "Chakra-UI", "Vite", "AOS Library"],
	},
	{
		name: "Face Recognition App",
		summary: "A React and Flask-based attendance system using facial recognition for accurate, secure, and non-invasive tracking. Integrated MySQL and a custom-trained YOLOv10-N model for face detection.",
		// url: "https://weddingsite-teal.vercel.app/",
		github: "https://github.com/Meekunn/face_recognition_app",
		tools: ["React", "TypeScript", "Chakra-UI", "Flask", "Conda", "MySQL", "DeepFace Framework", "YOLOv10-N model"],
	},
	{
		name: "Digit Recognizer – CNN",
		summary: "Developed a Convolutional Neural Network (CNN) for MNIST digit classification, achieving higher accuracy than the ANN baseline. The project highlights feature extraction with convolutional layers, preprocessing with OpenCV, and interactive prediction capabilities.",
		// url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/Digit_Recognizer_CNN",
		tools: ["Python", "Keras/TensorFlow", "MNIST Dataset", "NumPy", "OpenCV", "Matplotlib"],
	},
	{
		name: "Digit Recognizer – ANN",
		summary: "Built a digit recognition model using a simple Artificial Neural Network (ANN) trained on the MNIST dataset. The project demonstrates basic neural network architecture, data preprocessing, and model evaluation for handwritten digit classification.",
		// url: "https://ai-solutions-landing-page.vercel.app/",
		github: "https://github.com/Meekunn/Digit_Recognizer",
		tools: ["Python", "Keras/TensorFlow", "MNIST Dataset", "NumPy", "Matplotlib"],
	},
	{
		name: "Wedding Website",
		summary: "I crafted an elegant wedding site, seamlessly blending style and functionality. Through coding, I created a delightful and user-friendly experience for couples and their guests. Designed for Mobile Screens",
		url: "https://weddingsite-teal.vercel.app/",
		tools: ["React", "Nextjs", "TypeScript", "Chakra-UI"],
	},
	{
		name: "Feature-Rich Text Editor",
		summary:
			"Developed a text editor that offers a user-friendly interface and a wide range of functionalities for editing and manipulating text. The features implemented include Text Editing, Formatting Options, File Management, and Encoding Support.",
		github: "https://github.com/Meekunn/Text_Editor/",
		tools: ["C++", "Qt Creator"],
	},
	{
		name: "Smart Room/Vault Monitoring System.",
		summary:
			"This is an Arduino-based project that utilizes an LED, an ultrasonic sensor, and a temperature sensor. The project involves controlling the LED, reading data from the sensors, and transmitting the collected data to a computer through the Arduino's serial port. Additionally, a QT application is developed to read the data from the serial port and display it in real-time on a graphical user interface (GUI).",
		github: "https://github.com/Meekunn/Smart_System_Vault/",
		tools: ["C/C++", "Qt Creator", "Arduino"],
	},
	{
		name: "Towering Heights School",
		summary:
			"Collaborated with UI/UX designers to create a modern and user-friendly website for a school (Towering Heights School). Key features included a streamlined navigation system, photo gallery, and an intuitive staff carousel. By utilizing the latest web development technologies and design best practices, we were able to create a responsive and accessible platform that catered to the needs of students, parents, and staff.",
		github: "https://github.com/Meekunn/toweringheights-frontend",
		url: "https://www.toweringheightsschools.com/",
		tools: ["JavaScript", "React", "TypeScript", "Next.js", "Chakra-UI", "Sass"],
	},
	{
		name: "Tsk App",
		summary:
			"This full stack todo-app features a clean and intuitive user interface that allows users to easily manage their tasks. The app has all the basic functions such as adding, editing, deleting, and checking tasks in each collection. Additionally, users can sign in with either their email or Google account. With a focus on user experience, the design was inspired by Dribble and developed to bring a seamless experience to users.",
		github: "https://github.com/Meekunn/EHC-React-Project",
		url: "https://ehc-todoapp.web.app/",
		tools: ["JavaScript", "React", "TypeScript", "Firebase", "Sass"],
	},
	{
		name: "Portfolio (1)",
		summary:
			"Developed a portfolio website showcasing my skills and experience. The design is clean and modern, with a focus on highlighting my work and achievements. The website features smooth animations and a user-friendly interface, making navigation and learning about my qualifications easy. ",
		github: "https://github.com/Meekunn/My-Portfolio",
		url: "https://adedamolaorofin.web.app/",
		tools: ["JavaScript", "React", "TypeScript", "Firebase", "Sass", "Material-UI", "Emailjs"],
	},
	{
		name: "FindiT App",
		summary:
			"Developed a web application that simplifies the process of finding staff members and their availability for student consultations at a university. The app provides an intuitive interface for students to easily search and locate staff members. The project has been a valuable experience, combining my technical skills with the opportunity to create something that can benefit many students.",
		github: "https://github.com/Meekunn/FindiT-app/tree/new",
		url: "https://findit-4cd7f.web.app/",
		tools: ["JavaScript", "React", "TypeScript", "Firebase", "Sass", "Material-UI"],
	},
];
