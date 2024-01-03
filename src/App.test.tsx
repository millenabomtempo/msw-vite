import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

describe('<App />', () => {
  it("Renders the main page", () => {
    const queryClient = new QueryClient();
  
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(true).toBeTruthy();
  });

  it('receives a mocked response to a REST API request', async () => {
    const response = await axios.get('/users')
  
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(await response.data).toEqual(Array.from({length: 10}, (_, index) => (
      {
        id: index + 1,
        nome: `Usuário ${index + 1}`,
      }
    )))
  })
  
})


