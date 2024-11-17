import "@mantine/core/styles.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
