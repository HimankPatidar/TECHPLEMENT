// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar({ onSearch }) {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = () => {
//         onSearch(searchTerm);
//     };

//     return (
//         <nav className="bg-gray-800 p-4 flex justify-between items-center">
//             <Link to="/" className="text-white text-lg font-semibold">Quote of the Day</Link>
//             <div className="flex">
//                 <input
//                     type="text"
//                     placeholder="Search by author"
//                     className="border border-gray-300 px-2 py-1 rounded-md mr-2"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     onClick={handleSearch}
//                 >
//                     Search
//                 </button>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';

function NavBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">Quote of the Day</div>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Search by author"
                    className="border border-gray-300 px-2 py-1 rounded-md mr-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
