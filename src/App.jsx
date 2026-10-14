import Greeting from './components/Greeting';
import Product from './components/Product';
import Avatar from './components/Avatar';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Кнопка нажата!');
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <h1>Компоненты и пропсы: задачи 1-5</h1>

      {/* ---- Задача 1: Greeting ---- */}
      <section>
        <h2>1. Greeting</h2>
        {/* только имя: greeting берётся по умолчанию */}
        <Greeting name="Иван" />
        {/* имя + кастомное приветствие */}
        <Greeting name="Мария" greeting="Добрый день" />
        {/* без имени: сработает fallback «незнакомец» */}
        <Greeting />
      </section>

      {/* ---- Задача 2: Product ---- */}
      <section>
        <h2>2. Product</h2>
        <Product title="Клавиатура" price={5000} />
        <Product title="Монитор" price={25000} discount={20} />
        <Product title="Мышка" price={1999} discount={15} />
      </section>

      {/* ---- Задача 3: Avatar ---- */}
      <section>
        <h2>3. Avatar</h2>
        <div className="row">
          <Avatar name="Иван" size={32} />
          <Avatar name="Мария" size={48} />
          <Avatar name="Алексей" size={80} />
        </div>
      </section>

      {/* ---- Задача 4: Card с разным children ---- */}
      <section>
        <h2>4. Card с children</h2>
        <Card title="О себе">
          <p style={{ margin: 0 }}>
            Просто текст внутри карточки. Он пришёл через проп children.
          </p>
        </Card>
        <Card title="Навыки">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </Card>
        <Card title="Действия">
          {/* children может быть даже другим компонентом */}
          <Button variant="secondary">Кнопка внутри карточки</Button>
        </Card>
      </section>

      {/* ---- Задача 5: Button, все варианты ---- */}
      <section>
        <h2>5. Button</h2>
        <div className="row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
          <Button onClick={handleClick}>С onClick</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
