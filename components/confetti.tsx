import Image from 'next/image'
import React from 'react'

const Confetti = () => {
    return (
        <Image
            src="/images/confetti.gif"
            alt="Confetti"
            width={300}
            height={300}
            className="object-cover"
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            // width={400}
            // height={400}
            // priority
        />
    )
}

export default Confetti