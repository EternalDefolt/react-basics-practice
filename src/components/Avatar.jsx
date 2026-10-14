// Задача 3. Avatar: круглый блок с первой буквой имени.

const PALETTE = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

function Avatar({ name, size = 48 }) {
  // Цвет «любой»: берём из палитры по первой букве имени.
  // Детерминированно: одно и то же имя всегда даёт один и тот же цвет.
  const color = PALETTE[name.charCodeAt(0) % PALETTE.length];

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%', // круг
        background: color,
        color: 'white',
        // центрируем букву по обеим осям
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: size / 2, // буква масштабируется вместе с аватаром
        fontWeight: 'bold',
        flexShrink: 0, // не даём сжиматься внутри flex-строк
      }}
    >
      {name[0]}
    </div>
  );
}

export default Avatar;
