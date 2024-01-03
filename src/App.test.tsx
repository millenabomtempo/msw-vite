import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  
})


