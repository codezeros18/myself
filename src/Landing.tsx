import backg from './assets/backg3.png';

function Landing() {
    return (
        <div className="relative isolate min-h-screen md:min-h-[90vh] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[300px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            </div>

            {/* Background Image with Gradient */}
            <div className="absolute inset-0 flex items-center justify-center -mt-20">
                <div className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full absolute z-0">
                    <img src={backg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                </div>
            </div>
            <div className="relative z-10 text-center p-4 -mt-24 md:-mt-20 lg:py-8 mx-auto">
                <p className="font-open py-10 text-[15px] leading-[20px] tracking-[2px] font-[300] text-white text-opacity-30">
                    FUTURE IS NOW
                </p>
                <h1 className=" font-merriweather text-[40px] lg:text-[60px] leading-[50px] lg:leading-[62px] tracking-[3px] sm:tracking-56px]  md:tracking-[8px] font-[700] pb-4 lg:pb-0">
                    ZERO'S COLLECTION
                </h1>
                <p className="font-playfair text-[14px] lg:text-[18px] leading-[24px] tracking-[4px] md:tracking-[9px] font-[400] italic">
                    BY UMN STUDENTS
                </p>
                <div className="mt-12">
                    <button className="relative border-2 text-[16px] border-white bg-transparent py-2 lg:py-4 px-8 lg:px-10 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blackie before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-blackie hover:px-6">
                        <span className="relative z-10 transition-colors duration-300">DISCOVER</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing