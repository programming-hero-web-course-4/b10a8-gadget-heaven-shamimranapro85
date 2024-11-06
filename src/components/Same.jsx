
import { NavLink, Outlet } from 'react-router-dom'

const Same = () => {
  return (
    <div>
        <NavLink to={"shamim"}>shamim</NavLink>
      <Outlet/>
    </div>
  )
}

export default Same
