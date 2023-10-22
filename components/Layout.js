import NavBar from './NavBar'
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;