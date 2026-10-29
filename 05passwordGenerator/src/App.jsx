// import { useState , useCallback} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'



import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+[]{}~'";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center text-2xl font-bold my-3">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm mb-4">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <label className="text-white whitespace-nowrap">
            Length: {length}
          </label>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numbers"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers" className="text-white">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characters"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characters" className="text-white">
            Include Special Characters
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;


