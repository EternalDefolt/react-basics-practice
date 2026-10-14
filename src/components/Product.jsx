// Задача 2. Product: название, цена после скидки,
// при скидке > 0: зачёркнутая старая цена и процент скидки.

function Product({ title, price, discount = 0 }) {
  // Считаем цену после скидки внутри компонента.
  // Умножаем на целые (100 - discount) и округляем. Так не ловим
  // хвосты вроде 849.1500000000001 из-за плавающей точки.
  const finalPrice = Math.round(price * (100 - discount)) / 100;

  return (
    <div>
      <h3 style={{ margin: '0 0 4px' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 18, fontWeight: 'bold' }}>
        {finalPrice} ₽
      </p>

      {/* Условный рендер: блок виден только если скидка есть */}
      {discount > 0 && (
        <p style={{ margin: '4px 0 0', color: '#ef4444' }}>
          <s>{price} ₽</s> Скидка: {discount}%
        </p>
      )}
    </div>
  );
}

export default Product;
