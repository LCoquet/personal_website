'use client';

type MainContainerProps = {
    children: React.ReactNode;
}

export default function MainContainer({children}: MainContainerProps ) {
    return (
        <div className="w-3/4 mx-auto bg-white border border-gray-300 rounded-lg p-8 text-center relative z-10">
            {children}
        </div>
    );
}