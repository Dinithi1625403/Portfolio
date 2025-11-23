'use client';

export default function PageLoader({ isLoading = true }) {
  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0033 50%, #0a0a0f 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Spinner */}
        <div style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            border: '4px solid transparent',
            borderTop: '4px solid #8b5cf6',
            borderRight: '4px solid #a855f7',
            borderRadius: '50%',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), inset 0 0 30px rgba(139, 92, 246, 0.4)',
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
            animation: 'spin 2s linear infinite',
          }} />
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            border: '3px solid transparent',
            borderBottom: '3px solid #c084fc',
            borderLeft: '3px solid #a855f7',
            borderRadius: '50%',
            boxShadow: '0 0 25px rgba(192, 132, 252, 0.6)',
            filter: 'drop-shadow(0 0 15px rgba(192, 132, 252, 0.7))',
            animation: 'spinReverse 3s linear infinite',
          }} />
        </div>

        {/* Loading Text */}
        <div style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#e2e8f0',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'flex',
          gap: '2px',
          textShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
        }}>
          <span>Loading</span>
          <span style={{
            color: '#8b5cf6',
            fontWeight: '700',
            animation: 'blink 1.5s infinite',
          }}>.</span>
          <span style={{
            color: '#8b5cf6',
            fontWeight: '700',
            animation: 'blink 1.5s infinite 0.5s',
          }}>.</span>
          <span style={{
            color: '#8b5cf6',
            fontWeight: '700',
            animation: 'blink 1.5s infinite 1s',
          }}>.</span>
        </div>

        {/* Message */}
        <div style={{
          fontSize: '16px',
          color: '#a78bfa',
          letterSpacing: '1px',
          textAlign: 'center',
          fontStyle: 'italic',
          textShadow: '0 0 10px rgba(167, 139, 250, 0.6)',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          Preparing your experience...
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
