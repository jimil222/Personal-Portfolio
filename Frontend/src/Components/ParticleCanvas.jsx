import React, { useRef, useEffect } from 'react'

const ParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    let width = window.innerWidth
    let height = window.innerHeight
    const mouse = { x: -1000, y: -1000 }
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 12000), 120)
    const CONNECTION_DISTANCE = 150
    const MOUSE_RADIUS = 180

    canvas.width = width
    canvas.height = height

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.6
        this.vy = (Math.random() - 0.5) * 0.6
        this.radius = Math.random() * 1.8 + 0.5
        // Assign each particle a layer for depth effect
        this.layer = Math.random()
        this.baseAlpha = this.layer * 0.5 + 0.2
      }

      update() {
        // Mouse repulsion
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          this.vx += (dx / dist) * force * 0.4
          this.vy += (dy / dist) * force * 0.4
        }

        // Apply velocity with damping
        this.vx *= 0.98
        this.vy *= 0.98
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < -10) this.x = width + 10
        if (this.x > width + 10) this.x = -10
        if (this.y < -10) this.y = height + 10
        if (this.y > height + 10) this.y = -10
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.baseAlpha})`
        ctx.fill()

        // Subtle glow for larger particles
        if (this.radius > 1.2) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(66, 198, 161, ${this.baseAlpha * 0.08})`
          ctx.fill()
        }
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(66, 198, 161, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Mouse connections
        const mdx = particles[i].x - mouse.x
        const mdy = particles[i].y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < MOUSE_RADIUS) {
          const alpha = (1 - mDist / MOUSE_RADIUS) * 0.3
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(66, 198, 161, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function handleMouseLeave() {
      mouse.x = -1000
      mouse.y = -1000
    }

    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  )
}

export default ParticleCanvas
