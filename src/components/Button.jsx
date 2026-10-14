// Задача 5. Button: кнопка с вариантами стиля.

// Словарь цветов: variant → фон. Легко расширять новым вариантом.
const COLORS = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  danger: '#ef4444',
};

function Button({ children, variant = 'primary', onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: COLORS[variant],
        color: 'white',
        border: 'none',
        padding: '10px 18px',
        borderRadius: 8,
        fontSize: 14,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, // полупрозрачная, если отключена
      }}
    >
      {children}
    </button>
  );
}

export default Button;
