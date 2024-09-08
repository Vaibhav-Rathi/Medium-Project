import { Link } from "react-router-dom";

export const AboutPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">Medium</div>
                    <nav className="space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                        <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
                        <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</Link>
                    </nav>
                </div>
            </header>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-800">About Medium</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Medium is a platform where writers and readers from all over the world connect.
                        Whether you’re here to share your story or discover new perspectives, we are committed
                        to providing a space for meaningful conversations.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Our Mission</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MissionCard
                            icon="🌍"
                            title="Connecting the World"
                            description="Our mission is to create a global platform where ideas, stories, and experiences are shared openly and freely."
                        />
                        <MissionCard
                            icon="✍️"
                            title="Empowering Writers"
                            description="We aim to empower writers by providing them with a platform to express themselves and reach a global audience."
                        />
                        <MissionCard
                            icon="💬"
                            title="Fostering Conversations"
                            description="We believe that every story matters. By encouraging thoughtful discussions, we help build understanding and empathy."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our team is made up of passionate individuals who believe in the power of stories.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Example Team Members */}
                        <TeamCard
                            name="Vaibhav Rathi"
                            role="Founder & CEO"
                            bio="Vaibhav is the visionary behind MyBlog, passionate about connecting writers and readers globally."
                        />
                        <TeamCard
                            name="Pulkit Sharma"
                            role="Co-Founder & Chief Editor"
                            bio="Pukit ensures that every story published on MyBlog is insightful, engaging, and impactful."
                        />
                        <TeamCard
                            name="Vivek Grover"
                            role="Co-Founder & Marketing Manager"
                            bio="Vivek leads our marketing efforts, making sure that MyBlog reaches as many passionate readers as possible."
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
                                <button className="text-white hover:text-blue-400">Facebook</button>
                                <button className="text-white hover:text-blue-400">Twitter</button>
                                <button className="text-white hover:text-blue-400">LinkedIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Mission Card Component
const MissionCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="text-5xl">{icon}</div>
        <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

// Team Card Component
const TeamCard = ({ name, role, bio }: { name: string, role: string, bio: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600 font-semibold">{role}</p>
        <p className="mt-4 text-gray-600">{bio}</p>
    </div>
);
