import { NavLink } from 'react-router-dom'
//rsc
const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/'>
                Accueil
            </NavLink>
            
            <NavLink to='/a-propos'>
                A propos
            </NavLink>
            
            <NavLink to='/news'>
                News
            </NavLink>
        </div>
    );
};

export default Navigation;