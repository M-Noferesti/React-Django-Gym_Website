import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home";
import "./bootstrap-grid.min.css";
import { Switch, Route } from "react-router-dom";
import ContactUsPage from "./pages/contact-us";
import CoachesPage from "./pages/coaches";
import GalleryPage from "./pages/gallery";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import AttendingClassesPage from "./pages/attending-classes";
import ProfilePage from "./pages/profile";
import EnrollmentsPage from "./pages/enrollments";
import PrivateOnlineClassesPage from "./pages/private-online-classes";
import Dashboard from "./components/blog-components/dashboard/dashboard";
import PublicOnlineClassesPage from "./pages/public-online-classes";
import PublicOnlineClassDetails from "./pages/public-online-class-details";
import PrivateOnlineClassDetails from "./pages/private-online-class-details";
import AttendingClassDetails from "./pages/attending-class-details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Dashboard} />
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/coaches" component={CoachesPage} />
          <Route
            path="/attending-class-details/:id"
            component={AttendingClassDetails}
          />
          <Route
            path="/private-online-class-details/:id"
            co
            component={PrivateOnlineClassDetails}
          />
          <Route
            path="/public-online-class-details/:id"
            component={PublicOnlineClassDetails}
          />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/attending-classes" component={AttendingClassesPage} />
          <Route
            path="/private-online-classes"
            component={PrivateOnlineClassesPage}
          />
          <Route
            path="/public-online-classes"
            component={PublicOnlineClassesPage}
          />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/requests" component={EnrollmentsPage} />
          <Footer />
        </div>
      </Switch>

      <ScrollToTop />
    </div>
  );
}

export default App;
