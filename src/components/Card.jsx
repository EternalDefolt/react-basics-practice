// Задача 4. Card: универсальная карточка.
// title рендерим как <h3>, всё содержимое между <Card>...</Card>
// автоматически попадает в проп children.

function Card({ title, children }) {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 10,
        padding: 16,
        background: 'white',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        marginBottom: 12, // отступ между карточками в демо
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      {/* children может быть чем угодно: текст, список, другой компонент */}
      {children}
    </div>
  );
}

export default Card;
