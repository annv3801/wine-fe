import { useMatch, Link } from 'react-router-dom';

export default function NavigationLink({ to, children }) {
    console.log(to)
    let match = useMatch(to);
    return (
        <Link
            to={to}
            className={match ? 'active-link' : 'inactive-link'}
        >
            {children}
        </Link>
    );
}