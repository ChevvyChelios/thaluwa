import Image from 'next/image'
import React from 'react'

const VideoOverlay = () => {
  return (
          <div className="absolute inset-0 z-0">
            <Image
                        src="/images/curt.gif"
                        alt="Confetti"
                        // className="object-cover"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        // width={400}
                        // height={400}
                        // priority
                    />
              {/* <video
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
              >
                  <source src="videos/curtain.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video> */}
          </div>
  )
}

export default VideoOverlay
