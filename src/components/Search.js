const Search = () => {
    return (
        <header className="justify-self-center content-center pt-10">
            {/* <h2 className="header__title">Search it. Explore it. Buy it.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
            /> */}
            <h1 class="text-center font-sans text-5xl py-16 font-semibold">Search it. Explore it. Buy it.</h1>

            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="flex justify-center content-center ">
                <input type="search" id="search" class=" block w-1/2 p-4 text-sm text-gray-900 border-none dark:border-none ring-0 dark:ring-0 rounded-lg bg-Slate-50  dark:bg-Slate-700  dark:placeholder-gray-400 dark:drop-shadow-lg dark:text-white" placeholder="Enter an address, neighborhood, city, or ZIP code" required />
                {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
        </header>
    );
}

export default Search;