import React, { useMemo } from 'react'

const HeroBackground = () => {
  const stars = useMemo(() => {
    const result = []
    for (let i = 0; i < 80; i++) {
      result.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.5,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`,
      })
    }
    return result
  }, [])

  return (
    <div className="absolute inset-0 hero-gradient-bg overflow-hidden">
      {/* Twinkling stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-twinkle absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      {/* Large floating gradient orbs */}
      <div
        className="floating-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #42c6a1, transparent 70%)',
          top: '-15%',
          right: '-10%',
        }}
      />
      <div
        className="floating-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #175845, transparent 70%)',
          bottom: '-20%',
          left: '-10%',
          animationDelay: '-7s',
          animationDuration: '25s',
        }}
      />
      <div
        className="floating-orb"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #0ea5e9, transparent 70%)',
          top: '50%',
          left: '40%',
          animationDelay: '-14s',
          animationDuration: '22s',
        }}
      />

      {/* Animated diagonal light streaks */}
      <div className="light-streak" style={{ top: '20%', animationDelay: '0s' }} />
      <div className="light-streak" style={{ top: '60%', animationDelay: '-4s' }} />
      <div className="light-streak" style={{ top: '80%', animationDelay: '-8s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #42c6a1, transparent 60%)',
        }}
      />

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/40 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/30 via-transparent to-[#0a0f1c]/30" />
    </div>
  )
}

export default HeroBackground
