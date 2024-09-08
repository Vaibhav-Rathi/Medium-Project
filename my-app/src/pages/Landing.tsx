import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Add your logo or site name here */}
                    <div className="text-2xl font-bold text-gray-800">MyBlog</div>
                    <nav className="space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                        <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
                        <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="container mx-auto px-6 py-20">
                    <h1 className="text-5xl font-bold">Share Your Story With the World</h1>
                    <p className="mt-4 text-lg">Create, read, and share insightful blog posts with the world on MyBlog.</p>
                    <div className="mt-8">
                        <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 mr-4">
                            Get Started
                        </Link>
                        <Link to="/blogs" className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">
                            Explore Blogs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose MyBlog?</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon="📝" 
                            title="Create Blogs Easily" 
                            description="Our intuitive editor makes it easy for you to create engaging blog posts." 
                        />
                        <FeatureCard 
                            icon="🌍" 
                            title="Share with the World" 
                            description="Publish your blogs and reach readers from around the globe." 
                        />
                        <FeatureCard 
                            icon="🔐" 
                            title="Secure and Private" 
                            description="Your data and posts are safe with our top-notch security systems." 
                        />
                    </div>
                </div>
            </section>

            {/* Blog Highlights Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Featured Blogs</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <BlogCard 
                            title="How to Start Blogging in 2024"
                            author="John Doe"
                            excerpt="Learn the basics of blogging and how to make your first post engaging."
                        />
                        <BlogCard 
                            title="Tips for Writing Engaging Content"
                            author="Jane Smith"
                            excerpt="Discover key strategies to captivate your readers and grow your blog audience."
                        />
                        <BlogCard 
                            title="10 Ways Blogging Can Help Your Career"
                            author="Sarah Lee"
                            excerpt="Blogging is more than a hobby. Learn how it can boost your career."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-10">
                <div className="container mx-auto px-6 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-lg">MyBlog</h3>
                            <p className="mt-4">Connecting writers and readers across the globe.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Quick Links</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="/" className="hover:underline">Home</Link></li>
                                <li><Link to="/about" className="hover:underline">About</Link></li>
                                <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
                                <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Stay Connected</h3>
                            <p className="mt-4">Follow us on our social media channels:</p>
                            <div className="mt-4 space-x-4">
                                <a href="#" className="text-white hover:text-blue-400">Facebook</a>
                                <a href="#" className="text-white hover:text-blue-400">Twitter</a>
                                <a href="#" className="text-white hover:text-blue-400">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="text-5xl">{icon}</div>
        <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

// Blog Card Component
const BlogCard = ({ title, author, excerpt }: { title: string, author: string, excerpt: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{excerpt}</p>
        <p className="mt-4 text-sm text-gray-500">By {author}</p>
    </div>
);
