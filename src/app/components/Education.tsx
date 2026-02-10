import imgASU from "../../assets/ASU.jpeg";

export function Education() {
    return (
        <section className="bg-white py-12 lg:py-32 -mx-8 lg:mx-0">
            <div className="max-w-[1320px] mx-auto px-8 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 lg:gap-12 items-center max-w-[1000px]">

                    {/* Content - Left */}
                    <div className="flex flex-col gap-6 items-start order-2 lg:order-1 lg:pl-[222px]">
                        <div className="space-y-1">
                            <h2 className="font-['Inter'] font-bold text-3xl lg:text-[40px] leading-tight text-black">
                                Arizona State University
                            </h2>
                            <p className="font-['Caveat_Brush'] text-2xl text-[#747474]">
                                Expected graduation Dec 2026
                            </p>
                        </div>

                        <p className="font-['Inter'] font-normal text-lg lg:text-[18px] text-[#555] leading-relaxed max-w-lg">
                            I am currently pursuing a Master of Science in User Experience. In parallel, I work as a UX Design Assistant with EdPlus, gaining hands-on experience collaborating on real-world educational platforms, conducting research, and contributing to accessible, scalable digital experiences.
                        </p>
                    </div>

                    {/* Image - Right */}
                    <div className="relative group order-1 lg:order-2">
                        {/* Simple photo frame effect */}
                        <div className="relative w-full h-[250px] lg:h-[300px] overflow-hidden rounded-2xl shadow-xl transform lg:rotate-[2deg] transition-transform duration-300 group-hover:rotate-0 bg-gray-100">
                            <img
                                src={imgASU}
                                alt="Arizona State University campus"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative backing */}
                        <div className="absolute inset-0 bg-gray-200 rounded-2xl -z-10 translate-x-2 translate-y-2 lg:rotate-[-3deg] h-[250px] lg:h-[300px]"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
