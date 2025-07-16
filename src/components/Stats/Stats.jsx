import './Stats.css'
import { useState, useEffect, useRef } from 'react'

export const Stats = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    taxiBookings: 0,
    safariBookings: 0
  })
  
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const finalNumbers = {
    customers: 8790,
    taxiBookings: 7900,
    safariBookings: 3484
  }

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startCounters = () => {
    const duration = 4000 // 4 seconds
    const steps = 111 // 111 steps for smooth animation

    Object.keys(finalNumbers).forEach((key) => {
      const finalValue = finalNumbers[key]
      const increment = finalValue / steps
      let currentValue = 0

      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValue) {
          currentValue = finalValue
          clearInterval(timer)
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }))
      }, duration / steps)
    })
  }

  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  return (
    <div className="container7">
      <section className="stats" id="stats" ref={statsRef}>
        <h2>Our Journey in Numbers</h2>
        <p className="stats-subtitle">
          Trusted by thousands for unforgettable wildlife experiences
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counters.customers)}+
            </div>
            <div className="stat-label">
              Happy Customers
            </div>
            <div className="stat-description">
              Satisfied travelers who experienced our services
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-taxi"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counters.taxiBookings)}+
            </div>
            <div className="stat-label">
              Taxi Bookings
            </div>
            <div className="stat-description">
              Comfortable rides and airport transfers
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-binoculars"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counters.safariBookings)}+
            </div>
            <div className="stat-label">
              Safari Adventures
            </div>
            <div className="stat-description">
              Thrilling wildlife safari experiences
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
