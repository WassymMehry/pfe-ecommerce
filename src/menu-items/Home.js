// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Home = {
    id: 'dashboard',
    title: 'Home',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default Home;
