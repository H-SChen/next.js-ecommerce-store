import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

// this is a way to wrap nav comps. with the layout, with the props.children and takes everything in between the tags!!!

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
