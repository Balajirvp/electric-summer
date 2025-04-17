import React, { useState, useEffect } from 'react';

const MinimalistPortfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample projects data - replace with your actual projects later
  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis Pipeline",
      description: "End-to-end sentiment analysis system for customer feedback",
      tech: ["PyTorch", "Hugging Face", "FastAPI", "React"],
      dataSource: "Customer reviews dataset (10K samples)",
      approach: "Fine-tuned BERT model with custom classification head",
      results: "93.7% accuracy, deployed as API service",
      link: "#"
    },
    {
      id: 2,
      title: "Computer Vision Object Detection",
      description: "Real-time object detection for manufacturing defects",
      tech: ["TensorFlow", "OpenCV", "Docker", "AWS Lambda"],
      dataSource: "Proprietary manufacturing images (5K labeled samples)",
      approach: "Custom YOLOv5 architecture with transfer learning",
      results: "Reduced manual inspection time by 78%",
      link: "#"
    },
    {
      id: 3,
      title: "Recommendation Engine",
      description: "Content recommendation system for digital media platform",
      tech: ["PySpark", "MLflow", "Neo4j", "Flask"],
      dataSource: "User interaction logs and content metadata",
      approach: "Hybrid collaborative filtering with graph neural networks",
      results: "32% increase in user engagement metrics",
      link: "#"
    }
  ];

  // Personal information - replace with your info later
  const personal = {
    name: "Balaji Padmanathan",
    title: "ML Engineer",
    email: "balajirvp6@gmail.com",
    github: "github.com/balajirvp",
    linkedin: "linkedin.com/in/balaji-p-65845298"
  };

  useEffect(() => {
    // Simulate loading for smooth animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 font-sans antialiased ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Letterhead Header */}
      <header className="py-12 px-8 md:px-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-light tracking-tight">{personal.name}</h1>
              <p className="text-gray-500 mt-1">{personal.title}</p>
            </div>
            <div className="mt-4 md:mt-0 text-left text-sm text-gray-500 flex flex-col space-y-2">
            <a href={`mailto:${personal.email}`} className="hover:text-gray-800 transition-colors duration-200 flex items-center justify-start">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
            </a>
            <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-200 flex items-center justify-start">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
            </a>
            <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-200 flex items-center justify-start">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
            </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Introduction</h2>
            <p className="text-xl font-light leading-relaxed max-w-3xl">
              I design and implement end-to-end machine learning systems, from data collection and processing 
              to model deployment and monitoring. My focus is on creating practical AI solutions that solve 
              real-world problems with measurable impact.
            </p>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Selected Projects</h2>
            <div className="space-y-16">
              {projects.map(project => (
                <div 
                  key={project.id}
                  className="border-l-2 border-gray-200 pl-6 py-2 transform transition-all duration-300 hover:border-gray-400"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-300 ease-in-out ${activeProject === project.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Data Source</h4>
                      <p className="text-sm">{project.dataSource}</p>
                      
                      <h4 className="text-sm font-medium text-gray-500 mt-4 mb-2">Approach</h4>
                      <p className="text-sm">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Results</h4>
                      <p className="text-sm">{project.results}</p>
                      
                      <h4 className="text-sm font-medium text-gray-500 mt-4 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-2 text-sm text-gray-500 border-b border-gray-300 hover:text-gray-800 hover:border-gray-800 transition-all duration-200 ${activeProject === project.id ? 'opacity-100' : 'opacity-70'}`}
                  >
                    View Project Details →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} {personal.name}
        </div>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;