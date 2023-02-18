import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
<nav class="bg-slate-50 drop-shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">

      <div class="flex space-x-4">
        <div>
          <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <img src={logo} class="h-12 w-12 mr-1"/>
            <span class="font-bold">Millow</span>
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Buy</a>
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Rent</a>
          <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Sell</a>

        </div>
      </div>

      <div class="hidden md:flex items-center space-x-1">
      {account ? (
                <button
                    type="button"
                    className='py-2 px-3 bg-violet-600 hover:bg-violet-500 text-white hover:text-violet-100 rounded-lg transition duration-300'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='py-2 px-3 bg-violet-600 hover:bg-violet-500 text-white hover:text-violet-100 rounded-lg transition duration-300'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        {/* <a href="" class="py-2 px-3 bg-violet-600 hover:bg-violet-500 text-white hover:text-violet-100 rounded-lg transition duration-300">Signup</a> */}
      </div>

      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  <div class="mobile-menu hidden md:hidden">
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Buy</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Rent</a>
    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Sell</a>

  </div>
</nav>
    );
}

export default Navigation;


