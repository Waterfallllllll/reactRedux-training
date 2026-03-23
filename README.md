# Redux Counter (React + Vite)

A small educational project that demonstrates how to use **Redux** in a React application.
The app stores a `counter` value in the Redux store and lets you update it using buttons.

## What happens in the app

- `src/main.jsx` creates the Redux store via `createStore(reducer, ...)` and wraps the app with `Provider`.
- `src/reducer.jsx` keeps the `counter` state (initial value — `0`) and handles actions:
  - `INC` — increases `counter` by 1
  - `DEC` — decreases `counter` by 1
  - `RND` — multiplies `counter` by `payload` (payload is generated as a random number from `0` to `9`)
- `src/actions.jsx` defines action creators for three action types: `inc`, `dec`, `rnd`.
- `src/components/Counter.jsx` displays the current value and dispatches action creators on button clicks:
  - `useSelector` reads `state.counter`
  - `useDispatch` sends `inc()/dec()/rnd()`
- `src/components/App.jsx` simply renders the `Counter` component.

## Main files

- `src/main.jsx` — Redux store initialization and `Provider`
- `src/reducer.jsx` — reducer and initial state
- `src/actions.jsx` — action creators
- `src/components/Counter.jsx` — UI + dispatch/useSelector
- `src/components/App.jsx` — top-level container

## Getting started

1. Install dependencies:
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Build:
   - `npm run build`

## Tech stack

- React 19
- Redux 5
- react-redux 9
- Vite
