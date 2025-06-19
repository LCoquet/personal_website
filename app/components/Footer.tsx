'using client';

export default function Footer() {
    return (
        <footer className="border-t border-gray-300 mb-4 mt-5">
        <div className="container mx-auto text-center">
            <div className="container mx-auto text-center flex justify-center gap-4 mt-4 mb-2">
                <a href="https://github.com/LCoquet"><img src="github_logo.png" alt="Github logo" className="h-8 w-8" /></a>
                <a href="https://x.com/leo_cqt"><img src="twitter_logo.png" alt="Twitter logo" className="h-8 w-8" /></a>
            </div>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Léo COQUET</p>
        </div>
        </footer>
    );
}