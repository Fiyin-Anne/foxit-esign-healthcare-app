import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = ({ message, display, type }) => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

export default notify;
