import Layout from "./components/layout";
import GlobalStyles from "./styles/GlobalStyles";
import { VideoContextsProvider } from "./contexts/videoContext";

function App() {
  return (
    <>
    <VideoContextsProvider>
      <Layout />
    </VideoContextsProvider>
    <GlobalStyles />
    </>
  );
}

export default App;
