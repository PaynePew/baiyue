export function About() {
    return (
        <section className="relative w-full h-fit flex justify-center items-center">
            <div className="container relative">
                {/*Decoration Square-1*/}
                <div className="absolute bottom-0 left-0 w-[268px] h-[285px] md:w-[448px] md:h-[288px] lg:w-[445px] lg:h-[142px] rounded-[4px] bg-grayscale-dim square-shadow-1"></div>
                {/*Decoration Square-2*/}
                <div className="hidden lg:block absolute top-0 right-0 square-shadow-1 bg-grayscale-dim w-[582px] h-[639px]"></div>
                {/*About Section*/}
                <div className="relative flex flex-col max-w-[312px] pt-[74px] pb-[103px] mx-[24px] md:max-w-none md:mx-[129px] md:pb-[92px] md:w-[510px] lg:flex-row lg:w-auto lg:gap-[126px]">
                    {/*Left/Up Section*/}
                    <div className="relative h-fit py-[32px] mb-[80px] md:pt-[20px] md:pb-[27px] md:px-[30.5px] md:mb-[64px] lg:pt-[58px] lg:pb-[67px] lg:pl-[66px] lg:pr-[40px] ">
                        {/* border-arrow-top */}
                        <div className="absolute w-full md:max-w-[82%] lg:max-w-[85%] top-0 left-[50%] translate-x-[-50%]">
                            <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                        </div>
                        {/* border-arrow-left */}
                        <div className="hidden rotate-90 absolute w-full md:block left-0 top-[50%] md:max-w-[38%] lg:max-w-[83.5%] translate-x-[-50%]">
                            <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                        </div>
                        {/* border-arrow-right */}
                        <div className="hidden rotate-90 absolute w-full md:block right-0 top-[50%] md:max-w-[38%] lg:max-w-[83.5%] translate-x-[50%]">
                            <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                        </div>
                        {/* border-arrow-bottom*/}
                        <div className="absolute w-full md:max-w-[82%] lg:max-w-[85%] bottom-0 left-[50%] translate-x-[-50%]">
                            <div className="absolute w-full bg-grayscale-iron before:bg-grayscale-iron after:bg-grayscale-iron border-arrow"></div>
                        </div>
                        {/*triangle decoration*/}
                        <div className="hidden lg:block absolute bottom-[-20%] right-[5%]">
                            <img src="assets/triangle_3.png" alt="triangle_3_pic" />
                        </div>
                        {/*Card Body*/}
                        {/*Content*/}
                        <div className="flex flex-col gap-[16px] lg:w-[384px] lg:h-fit lg:items-start lg:gap-[24px]">
                            <div className="flex flex-col items-center justify-center gap-[8px] lg:items-start">
                                <h1 className="text-grayscale-gainsboro">百越價值</h1>
                                <div className="en-h3 text-primary">ABOUT US</div>
                            </div>
                            <div className="body-1 text-white text-center lg:text-left">
                                彙來說辦何歡希天大資難張為等思堆櫥凍鳳恩則原。攪一的繃欒業試上癸狂如著轉三大處過銘論若！稚秒脂我曼！
                            </div>
                            {/*Desktop Button*/}
                            <button className="main-button hidden button-shadow-1 nav-title lg:flex gap-[16px] text-[15px] h-[56px] lg:w-[173px]">
                                <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                                <div className="">關於百越</div>
                            </button>
                        </div>
                    </div>
                    {/* Right Section*/}
                    <div className="flex flex-col gap-[48px]">
                        <div className="flex justify-center items-center">
                            <img className="" src="assets/about_pic.png" alt="about_pic" />
                        </div>
                        {/*Mobile Button*/}
                        <button className="main-button button-shadow-1 nav-title flex gap-[16px] text-[15px] h-[56px] md:mx-[99px] lg:hidden">
                            <span className="w-[8px] h-[8px] bg-grayscale-light rounded-full"></span>
                            <div className="">關於百越</div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
