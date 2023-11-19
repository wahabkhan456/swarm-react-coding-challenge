import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoader from "react-loader-spinner";

export interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
    return (
        <ReactLoader type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
        />
    );
}

export default Loader;