'useClient'
import ClipLoader from "react-spinners";

const LoadingPage = () => {
    const override = {
        display: 'block',
        margin: '100px auto'
    }
    return <ClipLoader color="blue" cssOverride= {override} size={150} aria-label='Loading Spinner' />;
}
 
export default LoadingPage;