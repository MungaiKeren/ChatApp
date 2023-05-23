import "./App.css";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { useState } from "react";


function App() {
    const [user, setUser] = useState(false)
    return (
        <div className="App">
            {!user ? (
                <Welcome />
            ): 
            (
            <>
            <ChatBox />
            </>
            )}
        </div>
    )
}

export default App;