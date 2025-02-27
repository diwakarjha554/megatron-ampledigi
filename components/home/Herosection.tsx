import { AnimatedTooltip } from '../ui/animated-tooltip';
import { clientReview } from '../../data/client-review';
import Typewriter from '../shared/Typewritter';

const Herosection = () => {
    const words = ['Innovate', 'Create', 'Dominate'];

    return (
        <div className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-black w-full">
            {/* Background gradients with reduced opacity on mobile */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/[0.04] to-orange-900/[0.04] md:from-orange-600/5 md:to-orange-900/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.07),transparent_50%)] md:bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_50%)]"></div>
            </div>

            {/* Grid background with different opacity for mobile and desktop */}
            <div
                className="absolute inset-0 md:bg-[linear-gradient(rgba(255,125,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,125,0,0.03)_1px,transparent_1px)] bg-[linear-gradient(rgba(255,125,0,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,125,0,0.006)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:36px_36px] md:bg-[size:48px_48px]"
                style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
            ></div>

            {/* Content container */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-20 z-10">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 select-text">
                        <span className="block mt-2 sm:mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-[fadeInUp_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                            <Typewriter words={words} /> with Ample
                            <span className="text-orange-500">DIGI</span>.
                        </span>
                        <span className="block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] mt-3 sm:mt-5 md:mt-7">
                            Transforming Ideas Digitally.
                        </span>
                    </h1>

                    <div className="mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 animate-[fadeInUp_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards] select-text">
                        <p>Elevate your digital presence with cutting-edge solutions.</p>
                        <div className="mt-2">No Calls. No Lies. Just Results.</div>
                    </div>

                    <div className="mt-8 animate-[fadeInUp_1s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
                        <button className="relative z-20 px-6 py-2 text-lg font-semibold rounded bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] active:scale-95 cursor-pointer select-none">
                            Let&apos;s talk
                        </button>
                    </div>

                    <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 animate-[fadeInUp_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards] select-text">
                        <p>Trusted by Founders and Entrepreneurs from all over the world</p>
                        <div className="flex flex-row items-center justify-center w-full mt-5">
                            <AnimatedTooltip items={clientReview} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosection;
