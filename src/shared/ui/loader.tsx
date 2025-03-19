export const Loader = () => (
  <div style={{ textAlign: "center" }}>
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
      />
      <line x1="25" y1="25" x2="25" y2="10" stroke="#000" strokeWidth="2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
    <div>Загрузка...</div>
  </div>
);
