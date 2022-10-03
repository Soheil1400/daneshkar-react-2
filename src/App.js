import './App.css';
import Home from "./section/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SinglePageContact from "./section/SinglePageContact";
import {useState} from "react";


function App() {
    const [showMessage, setShowMessage] = useState('none')
    const [id, setId] = useState('0')
    const [state, setState] = useState('submit')
    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        age: 0,
        email: '',
        number: '',
        favorite: '',
        country: ''
    })

    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'soheil',
            age: 21,
            email: 'soheil@gmail.com',
            number: '09197164090',
            favorite: 'favoriteContact',
            country: 'iran'
        },
        {
            id: 2,
            name: 'ali',
            age: 18,
            email: 'ali@gmail.com',
            number: '09127164090',
            favorite: 'unFavoriteContact',
            country: 'usa'
        },
    ])
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home contacts={contacts}
                           setContacts={setContacts}
                           setForm={setForm}
                           setState={setState}
                           setId={setId}
                           form={form}
                           setShowMessage={setShowMessage}
                           state={state}
                           showMessage={showMessage}
                           id={id}
            />,
        },
        {
            path: "/contacts/:contactId",
            element: <SinglePageContact contacts={contacts}
                                        setShowMessage={setShowMessage}
                                        setId={setId}
                                        setForm={setForm}
                                        setState={setState}
            />,
        },
    ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
