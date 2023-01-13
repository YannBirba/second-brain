import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { darkTheme, lightTheme } from "./theme.css";
import { root } from "./App.css";
import { Button } from "./components/Button/Button";

const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true,
});
// Example Output:
// const modules = {
//   './pages/About.tsx': () => import('./pages/About.js'),
//   './pages/Home.tsx': () => import('./pages/Home.tsx')
// }

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!name) {
    throw new Error(`Invalid page path: ${path}`);
  }
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: PagePathsWithComponents[path].default,
  };
});

export const App = () => {
  const { theme, toggleTheme, preferSystem } = useTheme();
  return (
    <div className={`${theme === "dark" ? darkTheme : lightTheme} ${root}`}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
        eaque, repudiandae aspernatur quam necessitatibus quisquam ipsum illum
        praesentium sapiente similique tempora aut odit debitis blanditiis!
        Ratione beatae ducimus illo corporis voluptate nemo repudiandae
        aspernatur, eveniet et magnam animi amet, iusto non placeat alias nobis
        optio vero unde enim eum.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolorem
        eaque, repudiandae aspernatur quam necessitatibus quisquam ipsum illum
        praesentium sapiente similique tempora aut odit debitis blanditiis!
        Ratione beatae ducimus illo corporis voluptate nemo repudiandae
        aspernatur, eveniet et magnam animi amet, iusto non placeat alias nobis
        optio vero unde enim eum.
      </p>
      <Button
        type="button"
        variant="primary"
        onClick={() => toggleTheme()}
        name="Clic to switch theme"
      >
        Switch to {theme === "dark" ? "light" : "dark"} theme
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() => preferSystem()}
        name="Clic to switch to system theme"
      >
        Prefer system theme
      </Button>
      <Button name="test" type="button" variant="tertiary">
        Test
      </Button>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />} />;
        })}
      </Routes>
    </div>
  );
};
