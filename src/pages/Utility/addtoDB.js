import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredDocAppoint = () => {
    const storedDocSTR = localStorage.getItem("appoint");
    if (storedDocSTR) {
        const storedDocData = JSON.parse(storedDocSTR);
        return storedDocData;
    } else {
        return [];
    }
}

const addToStoreDB = (id, name) => {  
    const storedDocData = getStoredDocAppoint();

    if (storedDocData.includes(id)) {
        toast.error(`Already booked for Dr. ${name}`, {
            position: "top-right"
        });
    } else {
        storedDocData.push(id);
        const data = JSON.stringify(storedDocData);
        localStorage.setItem("appoint", data);
        toast.success(`Appointment successfully scheduled for Dr. ${name}`, {
            position: "top-right"
        });
    }
}

export { addToStoreDB,getStoredDocAppoint };
