import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom"
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient()
  return (
    <div className="App">
        {/*header에서 네트워크 통신이 일어나지 않으니까 여기에는 쿼리를 씌워줄 필요가 없음*/}
        <SearchHeader/>
        <QueryClientProvider client={queryClient}>
            <Outlet/>
        </QueryClientProvider>

    </div>
  );
}

export default App;
