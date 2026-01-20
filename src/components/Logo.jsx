function Logo({ size = 'default', className = '' }) {
  const sizes = {
    small: { width: '32px', height: '32px', fontSize: '1.5rem' },
    default: { width: '48px', height: '48px', fontSize: '2rem' },
    large: { width: '64px', height: '64px', fontSize: '2.5rem' },
    xlarge: { width: '96px', height: '96px', fontSize: '3.5rem' }
  }

  const sizeStyle = sizes[size]

  return (
    <div 
      className={className}
      style={{ 
        width: sizeStyle.width, 
        height: sizeStyle.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img 
        src="/logo.png" 
        alt="FinTech Dashboard Logo" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          display: 'block'
        }}
        onError={(e) => {
          // Fallback to emoji if logo not found
          e.target.style.display = 'none'
          const parent = e.target.parentElement
          if (parent && !parent.querySelector('.logo-fallback')) {
            const fallback = document.createElement('span')
            fallback.className = 'logo-fallback'
            fallback.textContent = '💰'
            fallback.style.fontSize = sizeStyle.fontSize
            parent.appendChild(fallback)
          }
        }}
      />
    </div>
  )
}

export default Logo
