import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./services/users";

function App() {
  const { data } = useQuery({ queryKey:['users'], queryFn: getUsers});

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>
          <h2>{item.nome}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
