import './App.css';
import './index.css';
import './output.css';

function App() {
    return (
        <div className="bg-snow min-h-screen">
            <div>
                <nav className="mt-12">
                    <div className="flex justify-between items-center ">
                        <p className="ml-40">D.WI</p>
                        <ul className= "flex mr-40 space-x-8">
                            <li><a href="#">About me</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="flex flex-col items-center ">
                    <div className="mt-36 text-center">
                        <h1>D.WI</h1>
                        <h2>portfolio of Dewi Berkhof</h2>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>

    );
}

export default App;
