"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import Confetti from './confetti';
import Popper from './popper';
import VideoOverlay from './curtain';

const CenteredCurtainReveal = ({ children }: { children: ReactNode }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showVideo, setShowVideo] = useState(true); // State to control video visibility

    useEffect(() => {
        setTimeout(() => {
            setShowConfetti(true);
        }, 3000);

        // Hide the video after 20 seconds
        setTimeout(() => {
            setShowVideo(false);
        }, 13000);

        // Hide confetti after 20 seconds
        setTimeout(() => {
            setShowConfetti(false);
        }, 30000);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-transparent">
            {/* Website Content Container */}
            <div className="relative z-0 w-full min-h-screen">
                {children}
            </div>

            {/* Curtain Container - Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none">

                {/* Video Overlay */}
                {showVideo && (
                    <div className="absolute inset-0 z-10">
                        <VideoOverlay />
                    </div>
                )}

                {/* Confetti and Poppers */}
                {showConfetti && (
                    <>
                        {/* Left Popper */}
                        <div className="fixed left-0 w-1/2 z-20 pointer-events-none">
                            <div className="relative w-full h-screen bottom-0 left-0 space-x-4 bg-transparent">
                                <div className="absolute bottom-0 left-0 bg-transparent">
                                    <Popper />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center rotate-45">
                                    <Confetti />
                                </div>
                            </div>
                        </div>

                        {/* Right Popper */}
                        <div className="fixed right-0 w-1/2 z-20 pointer-events-none">
                            <div className="relative w-full h-screen bottom-0 right-0 space-x-4 bg-transparent">
                                <div className="absolute bottom-0 right-0 bg-transparent scale-x-[-1]">
                                    <Popper />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center -rotate-45 scale-x-[-1]">
                                    <Confetti />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CenteredCurtainReveal;