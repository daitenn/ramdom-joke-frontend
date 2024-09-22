import './App.css'
import { useGetJoke } from './hooks/useGetJoke'

function App() {
  const {data} = useGetJoke();

  return (
    <>
      <div>{data?.type} {data?.setup} {data?.punchline} {data?.id}</div>
    </>
  )
}

export default App
