import Header from './Header';
import Content from './Content';
export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {
    return (
        <div>
            <Header></Header>
            <Content></Content>
        </div>
    );
}

export default Layout;