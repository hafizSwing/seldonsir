import './App.scss';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 sticky top-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SeldonSir</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
            <li><a href="#" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="hero bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SeldonSir</h2>
          <p className="text-lg md:text-xl mb-6">Build amazing UIs with Tailwind CSS and SCSS!</p>
          <button className="custom-button">Get Started</button>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="custom-card">
            <h4 className="text-xl font-bold mb-2">Feature 1</h4>
            <p>Responsive design with Tailwind CSS utilities.</p>
          </div>
          <div className="custom-card">
            <h4 className="text-xl font-bold mb-2">Feature 2</h4>
            <p>Custom styles with SCSS variables and nesting.</p>
          </div>
          <div className="custom-card">
            <h4 className="text-xl font-bold mb-2">Feature 3</h4>
            <p>Fast development with Vite and React.</p>
          </div>
        </div>
      </section>
    </div>

    
  );
}

export default App;