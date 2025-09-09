'use client';

import Link from "next/link";

export default function ArticleCard({ article }: { article: { title: string; description: string; date: string; link: string; image: string } }) {
    return (
        <Link href={article.link} passHref>
            <div className="group relative text-left bg-white/30 border border-gray-300 rounded-lg mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden cursor-pointer min-h-[350px] flex flex-col justify-end">
                {/* Image at the very top, fades out on hover */}
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full block h-40 object-cover transition-opacity duration-500 group-hover:opacity-10"
                    style={{ display: "block" }}
                />
                {/* Card content with padding */}
                <div className="p-6 flex-1 flex flex-col justify-end">
                    {/* Title absolutely positioned at the bottom, moves up on hover */}
                    <h3 className="absolute w-full text-2xl font-semibold mb-2 transition-transform duration-500 bottom-6 group-hover:-translate-y-32 pointer-events-none">
                        {article.title}
                    </h3>
                    {/* Content, faded in on hover */}
                    <div className="z-10">
                        <p className="text-gray-700 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {article.description}
                        </p>
                        <p className="text-sm text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Published on {new Date(article.date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}