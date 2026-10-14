// Задача 1. Greeting: приветствие с настраиваемым текстом.
// name по условию обязательный, но раз в задаче просили проверить
// использование без имени, поэтому даём разумный fallback.

function Greeting({ name = 'незнакомец', greeting = 'Привет' }) {
  return (
    <p>
      {greeting}, {name}!
    </p>
  );
}

export default Greeting;
