import{
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    BrainCircuit,
    Frame,
    BarChart3, 
    Network,
    FileUser
} from "lucide-react";

import{ FiGithub, FiLinkedin} from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project1.png";
import PROJECT_IMG_2 from "../assets/images/project2.png";
import PROJECT_IMG_3 from "../assets/images/project3.png";
import PROJECT_IMG_4 from "../assets/images/project4.png";
import PROJECT_IMG_5 from "../assets/images/project5.png";
import PROJECT_IMG_6 from "../assets/images/project6.png";

export const SKILLS_CATEGORY = [
    /*{
        title: "Frontend",
        icon: Frame,
        description: "Create beautiful and responsive user interfaces",
        skills: [
        {name: "JavaScript", level: 90, color: "bg-blue-500"},
        {name: "TypeScript", level: 80, color: "bg-green-500"},
        {name: "React", level: 85, color: "bg-red-500"},
        {name: "HTML5", level: 95, color: "bg-yellow-500"},
        {name: "CSS3", level: 95, color: "bg-purple-500"},
        {name: "Tailwind CSS", level: 70, color: "bg-orange-500"},
        ]
    },*/
    {
        title: "Data Manipulation & Processing",
        icon: Database,
        description: "Handle, clean, and transform large datasets efficiently",
        skills: [
          { name: "NumPy", level: 90, color: "bg-green-500" },
          { name: "Pandas", level: 85, color: "bg-purple-500" },
        ],
    },
    {
        title: "Data Visualization & Analytics",
        icon: BarChart3,
        description: "Visualize and interpret data for model evaluation and insights",
        skills: [
          { name: "Plotly", level: 65, color: "bg-blue-500" },
          { name: "Matplotlib", level: 60, color: "bg-green-500" },
          { name: "Seaborn", level: 55, color: "bg-red-500" },
        ],
    },
    /*{
        title: "AI/LLM and ML",
        icon: BrainCircuit,
        description: "Build and train AI/LLM and ML models",
        skills: [
            {name: "NumPy", level: 90, color: "bg-green-500"},
            {name: "Pandas", level: 85, color: "bg-purple-500"},
            {name: "Scikit-learn", level: 80, color: "bg-orange-500"},
            {name: "TensorFlow", level: 75, color: "bg-red-500"},
            {name: "PyTorch", level: 70, color: "bg-yellow-500"},
            {name: "Plotly", level: 65, color: "bg-blue-500"},
            {name: "Matplotlib", level: 60, color: "bg-green-500"},
            {name: "Seaborn", level: 55, color: "bg-red-500"},
            {name: "Langchain", level: 50, color: "bg-yellow-500"},
            {name: "LlamaIndex", level: 45, color: "bg-blue-500"},
            {name: "LangGraph", level: 40, color: "bg-green-500"},
            {name: "OpenAI API", level: 40, color: "bg-green-500"},
        ]
    },*/
    {
        title: "Machine Learning & AI",
        icon: BrainCircuit,
        description: "Develop and train machine learning and AI models",
        skills: [
          { name: "Scikit-learn", level: 80, color: "bg-orange-500" },
          { name: "TensorFlow", level: 75, color: "bg-red-500" },
          { name: "PyTorch", level: 70, color: "bg-yellow-500" },
        ],
      },
      {
        title: "LLM Frameworks & Integrations",
        icon: Network,
        description: "Build, connect, and deploy large language model applications",
        skills: [
          { name: "Langchain", level: 50, color: "bg-yellow-500" },
          { name: "LlamaIndex", level: 45, color: "bg-blue-500" },
          { name: "LangGraph", level: 40, color: "bg-green-500" },
          { name: "OpenAI API", level: 40, color: "bg-red-500" },
        ],
      },
      {
        title: "Backend",
        icon: Server,
        description: "Build robust server-side applications",
        skills: [
            {name: "Python", level: 90, color: "bg-orange-500"},
            {name: "Node.js", level: 80, color: "bg-green-500"},
            {name: "Rest API", level: 85, color: "bg-purple-500"},
            {name: "FastAPI", level: 75, color: "bg-red-500"},
            {name: "Flask", level: 70, color: "bg-yellow-500"},
        ]
    },
    {
        title: "Database",
        icon: Database,
        description: "Manage and store data efficiently",
        skills: [
            {name: "MySQL", level: 90, color: "bg-green-500"},
            {name: "NoSQL", level: 85, color: "bg-purple-500"},
            {name: "Firebase", level: 80, color: "bg-orange-500"},
            {name: "MongoDB", level: 75, color: "bg-red-500"},
        ]
    },
    
];

export const TECH_STACK = [
    "Git",
    "GitHub",
    "VS Code",
    "Cursor",
    "Figma",
    "Shadcn UI",
    "Aceternity UI",
    "React Native Expo Router",
    "Notion",
    "Postman",
    "HTTPie",
    "Jupyter Notebook",
    "SageMaker",
    "Tableau",
    "Power BI",
    "Excel",
];

export const STATS = [
    {number: "25+", label: "Projects Completed"},
    {number: "5+", label: "Years of Experience"},
    {number: "40+", label: "Technologies"},
];

export const PROJECTS = [

    {
        id: 1,
        title: "Protein Lab: Enhanced ESMFold Protein Structure Predictor",
        description: "Developed a Streamlit web application for enhanced protein structure prediction using the ESMFold model. The tool features interactive 3D visualization with multiple rendering styles and advanced structural analysis, including per-residue pLDDT confidence scores, identification of low-confidence regions, and calculation of key geometric properties (Radius of Gyration). Supports FASTA input for diverse sequence processing.",
        image: PROJECT_IMG_1,
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/protein-lab",
        tags: ["Python", "Bioinformatics", "Protein Structure Prediction", "Streamlit", "ESMFold", "Data Visualization", "Numpy", "Pandas", "Plotly", "stmol", "py3Dmol"],
        category: "Bioinformatics",
        featured: true,
    },
    {
        id: 2,
        title: "Interactive ML Studio - Random Forest Regression",
        description: "Developed an interactive, no-code Machine Learning web application using Streamlit. The platform allows users to upload CSV data, apply Random Forest Regression, and perform interactive parameter tuning for learning and general parameters. It provides real-time performance evaluation, prominently displaying R² Score and Mean Squared Error (MSE) for both training and test sets and utilizes Scikit-learn.",
        image: PROJECT_IMG_2,
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/ml-studio",
        tags: ["Python", "Machine Learning", "Data Science", "Streamlit", "Scikit-learn", "Random Forest", "Data Visualization", "Pandas", "Numpy"],
        category: "Machine Learning",
        featured: false,
    },
    {
        id: 3,
        title: "Call Center Speech Analytics Pipeline",
        description: "Built an end-to-end speech analytics pipeline to process call center recordings. Utilized the AssemblyAI SDK to transcribe audio, enabling speaker diarization (voice recognition) and sentiment analysis. Integrated the LeMUR LLM feature to intelligently infer and map generic speaker labels (A, B) to actual names present in the transcript. Performed Named Entity Recognition (NER) using spaCy to extract relevant entities from the dialogue. Visualized the results with interactive heatmaps generated by Altair, showing sentiment distribution across different speakers and dialogue sequences.",
        image: PROJECT_IMG_3,
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/call-center-speech-analytics",
        tags: ["Python", "AssemblyAI", "LeMUR", "Natural Language Processing", "Speech-to-Text", "Speaker Diarization", "Sentiment Analysis", "spaCy", "Data Visualization", "Altair", "Pandas"],
        category: "Natural Language Processing",
        featured: false,
    },
    {
        id: 4,
        title: "Multilingual Named Entity Recognition (NER) Studio",
        description: "Developed a **multilingual Named Entity Recognition (NER) web application** using **Streamlit**. The tool performs sophisticated NLP analysis across **100+ languages** by integrating **Hugging Face**'s pre-trained **XLM-RoBERTa-large** model for sequence classification.",
        image: PROJECT_IMG_4,
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/multilingual-ai",
        tags: ["Python", "Natural Language Processing", "Multilingual AI", "Hugging Face", "XLM-RoBERTa", "Named Entity Recognition", "Streamlit", "Transformers", "PyTorch"],
        category: "Natural Language Processing",
        featured: false,
    },
    {
        id: 5,
        title: "WireframePro - Wireframe to Code",
        description: "Developed full-stack web platform automating wireframe-to-code conversion using OpenAI API with React/TypeScript frontend, Node.js/Express backend, and MySQL database. Integrated Stripe payment system for credit-based transactions and implemented real-time code preview with streaming AI responses. Designed database schema and RESTful APIs supporting authentication, content management, usage tracking, and multiframework code generation.",
        image: PROJECT_IMG_5,
        linkUrl: "#",
        githubUrl: "#",
        tags: ["React", "Tailwind CSS", "TypeScript","Node.js","Express","MySql","OpenAI"],
        category: "Full Stack",
        featured: true,
    },
    {
        id: 6,
        title: "Predicting CRISPR-Cas9 on-target efficiency",
        description: "Implemented end-to-end ML pipeline with Python, scikit-learn, and XGBoost, achieving 42.1% R2 performance through systematic feature engineering of 15+ genomic sequence features. Developed and evaluated three machine learning algorithms (XGBoost, SVM, KNN) using comprehensive statistical analysis including PCA, correlation analysis, and model validation techniques (MSE, RMSE, MAE) with residual diagnostics for biological interpretability. Conducted advanced data preprocessing and visualization creating correlation heatmaps, feature importance rankings, and efficiency distribution analyses, discovering T-count as most predictive feature while validating established biological understanding of CRISPR mechanisms",
        image: PROJECT_IMG_6,
        linkUrl: "#",
        githubUrl: "#",
        tags: ["Python","Machine Learning","Data Analysis","Data Visualization","Pandas","Scikit-learn","Matplotlib","Seaborn"],
        category: "Machine Learning",
        featured: true,
    },

];

export const JOURNEY_STEPS = [
    {
        year: "2019",
        title: "Bachelor of Technology in Computer Engineering",
        company: "Gujarat Technological University, Gujarat, India",
        description: "Started my journey with a Bachelor of Technology in Computer Engineering",
        icon: Rocket,
        color: "bg-orange-500",
    },
    {
        year: "2021",
        title: "Freelance Full Stack Developer",
        company: "Upwork, Fiverr",
        description: "Developed a web application using React and Node.js",
        icon: Zap,
        color: "bg-yellow-500",
    },
    {
        year: "2022",
        title: "Full Stack Developer Intern",
        company: "NMR Infotech Pvt Ltd",
        description: "Developed a web application using React, Node.js, and MongoDB",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2023",
        title: "Bachelor of Technology in Computer Engineering",
        company: "Gujarat Technological University, Gujarat, India",
        description: "Graduated with a GPA of 3.17",
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "2024",
        title: "Master of Science in Computer Science",
        company: "Long Island University, Brooklyn, NY",
        description: "Started my journey with a Master of Science in Computer Science with Machine Learning and analysis as my major",
        icon: Rocket,
        color: "bg-red-500",
    },
    {
        year: "2026",
        title: "Master of Science in Computer Science",
        company: "Long Island University, Brooklyn, NY",
        description: "Graduated with a GPA of 3.67",
        icon: GraduationCap,
        color: "bg-cyan-500",
    }
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Creating intuitive and engaging user experiences",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Solving complex problems and finding creative solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always learning new things and expanding my knowledge",
    },
    {
        icon: BrainCircuit,
        title: "Machine Learning",
        description: "Building and training machine learning models",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/VatsalRoy",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/vatsal-roy/",
        color: "hover:text-blue-500",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:vatsal.roy2429@gmail.com",
        color: "hover:text-green-500",
        bgColor: "hover:bg-green-500/10",
    },
    {
        name: "Resume",
        icon: FileUser,
        url: "https://drive.google.com/file/d/1_YdJ2jt9anbf1vNyLsSSTsvr1VMb1xL7/view?usp=sharing",
        color: "hover:text-gray-500",
        bgColor: "hover:bg-gray-500/10",
    },
]

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "New York City, NY",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (908) 900-7259",
    },
    /*
    {
        icon: Mail,
        label: "Email",
        value: "vatsal.roy2429@gmail.com",
    },
    */
];
