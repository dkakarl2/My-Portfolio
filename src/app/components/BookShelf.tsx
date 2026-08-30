import React from 'react';
import designEveryday from '../../assets/Design of everyday things.jpeg';
import stealLikeArtist from '../../assets/Steal like an artist - book.jpg';
import hooked from '../../assets/Hooked-book.jpg';
import look from '../../assets/Look - book.jpg';
import naval from '../../assets/The Almanack of  Naval Ravikant.jpg';

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        cover: designEveryday,
    },
    {
        title: "Steal Like an Artist",
        author: "Austin Kleon",
        cover: stealLikeArtist,
    },
    {
        title: "Hooked",
        author: "Nir Eyal",
        cover: hooked,
    },
    {
        title: "Look: How to Pay Attention in a Distracted World",
        author: "Christian Madsbjerg",
        cover: look,
    },
    {
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        cover: naval,
    },
];

interface BookProps {
    title: string;
    author: string;
    cover: string;
}

const Book = ({ title, author, cover }: BookProps) => {
    return (
        <div className="group relative w-[220px] h-[340px] cursor-pointer perspective-[1500px]">
            <div className="relative w-full h-full text-left transition-all duration-500 ease-in-out [transform-style:preserve-3d]">

                {/* Front Cover */}
                <div
                    className="absolute inset-0 z-20 origin-left transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-140deg)] rounded-r-md shadow-xl"
                >
                    {/* Front */}
                    <div
                        className="absolute inset-0 h-full w-full bg-cover bg-center rounded-r-md [backface-visibility:hidden]"
                        style={{ backgroundImage: `url(${cover})` }}
                    />
                    {/* Back of Front Cover (Inside Left) */}
                    <div className="absolute inset-0 h-full w-full bg-white rounded-l-md [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-4 border-r border-gray-200">
                        <p className="text-xs text-gray-400 italic">Ex Libris</p>
                    </div>
                </div>

                {/* Inside Page (Right Side - Static base) */}
                <div className="absolute inset-0 z-10 bg-[#fdfdfd] rounded-r-md shadow-inner flex flex-col justify-center items-center p-6 text-center border-l border-gray-100">
                    <h3 className="font-['Manrope'] font-bold text-lg text-gray-900 mb-2 leading-tight">{title}</h3>
                    <p className="font-['Manrope'] text-sm text-gray-500">{author}</p>
                </div>

                {/* Pages effect (side/right) */}
                <div
                    className="absolute right-0 top-2 bottom-2 w-[12px] bg-white [transform:rotateY(90deg)_translateX(6px)] shadow-sm"
                ></div>

                {/* Back Cover */}
                <div className="absolute inset-0 bg-[#333] rounded-r-md [transform:translateZ(-10px)] shadow-2xl"></div>

            </div>
        </div>
    );
};

export function BookShelf() {
    return (
        <section className="py-24 px-8 lg:px-0 bg-white text-black">
            <div className="max-w-[1320px] mx-auto">
                <div className="mb-16">
                    <div className="lg:pl-[222px]">
                        <h2 className="font-['Manrope'] font-bold text-3xl lg:text-[48px] leading-tight lg:leading-[50px] text-black">
                            What's on my bookshelf
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-between gap-10">
                    {books.map((book, index) => (
                        <Book key={index} {...book} />
                    ))}
                </div>

                {/* Shelf shadow/platform effect */}
                {/* <div className="h-4 w-full bg-gradient-to-b from-[#222] to-transparent mt-4 rounded-full opacity-50 blur-sm"></div> */}
            </div>
        </section>
    );
}
