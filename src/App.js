import "./App.css";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Specials from "./components/Specials";
import Testimonial from "./components/Testimonial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main></Main>
        <Specials />
        <Testimonial />
      </>
    ),
    errorElement: <h1>Error</h1>
  },
  {
    path: "/booking",
    element: (
      <BookingForm />
    ),
  },
]);

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
