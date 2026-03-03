function Contact() {
    return (
        <div className="flex flex-col items-center text-center p-10 space-y-4">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p className="text-lg">You can reach me at:</p>
            <ul className="space-y-2">
                <li>
                    <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
                        Email
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact 