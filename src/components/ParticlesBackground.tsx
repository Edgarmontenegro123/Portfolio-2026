import { useEffect, useRef } from 'react'

export const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        const particles: Particle[] = []
        const mouse = { x: null as number | null, y: null as number | null, radius: 120 }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        const handleMouseLeaveCanvas = () => {
            mouse.x = null
            mouse.y = null
        }
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeaveCanvas)

        class Particle {
            x: number
            y: number
            directionX: number
            directionY: number
            size: number

            constructor(canvas: HTMLCanvasElement) {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.directionX = (Math.random() - 0.5) * 0.4
                this.directionY = (Math.random() - 0.5) * 0.4
                this.size = Math.random() * 2 + 1
            }
            draw(ctx: CanvasRenderingContext2D) {
                const isDark = document.documentElement.classList.contains('dark')
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
                ctx.fillStyle = isDark ? 'rgba(96, 165, 250, 0.25)' : 'rgba(37, 99, 235, 0.25)'
                ctx.fill()
            }
            update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x
                    const dy = mouse.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < mouse.radius) {
                        if (mouse.x > this.x && this.x > 10) this.x -= 0.8
                        if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 0.8
                        if (mouse.y > this.y && this.y > 10) this.y -= 0.8
                        if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 0.8
                    }
                }
                this.x += this.directionX
                this.y += this.directionY
                this.draw(ctx)
            }
        }

        const init = () => {
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 11000)
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(canvas))
            }
        }

        const connect = () => {
            const isDark = document.documentElement.classList.contains('dark')
            const maxDistance = 100
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x
                    const dy = particles[a].y - particles[b].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * (isDark ? 0.10 : 0.12)
                        ctx.strokeStyle = isDark ? `rgba(96, 165, 250, ${opacity})` : `rgba(37, 99, 235, ${opacity})`
                        ctx.lineWidth = 0.6
                        ctx.beginPath()
                        ctx.moveTo(particles[a].x, particles[a].y)
                        ctx.lineTo(particles[b].x, particles[b].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => p.update(canvas, ctx))
            connect()
            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeaveCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
        />
    )
}