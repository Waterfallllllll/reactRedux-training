# Redux Counter (React + Vite)

Небольшой учебный проект, показывающий, как использовать **Redux** в React-приложении.
Приложение хранит число `counter` в Redux-store и позволяет менять его через кнопки.

## Что происходит в приложении

- `src/main.jsx` создаёт Redux store через `createStore(reducer, ...)` и оборачивает приложение в `Provider`.
- `src/reducer.jsx` хранит состояние `counter` (стартовое значение — `0`) и обрабатывает действия:
  - `INC` — увеличивает `counter` на 1
  - `DEC` — уменьшает `counter` на 1
  - `RND` — умножает `counter` на `payload` (payload генерируется как случайное число от `0` до `9`)
- `src/actions.jsx` определяет creators для трёх типов действий: `inc`, `dec`, `rnd`.
- `src/components/Counter.jsx` отображает текущее значение и dispatch-ит action creators при кликах:
  - `useSelector` читает `state.counter`
  - `useDispatch` отправляет `inc()/dec()/rnd()`
- `src/components/App.jsx` просто рендерит компонент `Counter`.

## Основные файлы

- `src/main.jsx` — инициализация Redux store и `Provider`
- `src/reducer.jsx` — редьюсер и начальное состояние
- `src/actions.jsx` — action creators
- `src/components/Counter.jsx` — UI + dispatch/useSelector
- `src/components/App.jsx` — контейнер верхнего уровня

## Запуск

1. Установите зависимости:
   - `npm install`
2. Запустите dev-сервер:
   - `npm run dev`
3. Для сборки:
   - `npm run build`

## Стек

- React 19
- Redux 5
- react-redux 9
- Vite
