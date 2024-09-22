import { Box } from "../../components";
import { Navbar } from "../../components";
import { AppBar } from "../../components/app-bar/AppBar";
import './styles/home-style.css'

interface HomeContainerProps {
    children?: JSX.Element;
    title?: string;
    icon?: any;
}

export const Home = ({ title, children, icon }: HomeContainerProps) => {
    return (
        <Box className='main-container'>
            <Navbar />
            <Box className="container">
                <AppBar title={title} icon={icon}/>
                <Box className="page-container">
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
