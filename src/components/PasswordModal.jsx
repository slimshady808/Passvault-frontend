import React, { useState } from 'react';

export const PasswordModal = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const generatePassword = () => {
    // ... (same as your existing code)
    console.log('generate',passwordLength,includeNumbers)
    setPassword('now')
  };

  const copyToClipboard = () => {
    // ... (same as your existing code)
    console.log('copy')
    setPassword('')
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={openModal}
      >
        Generate Password
      </button>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Password Generator</h2>

            {/* Password Input Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Generated Password:</label>
              <input
                type="text"
                className="w-full bg-gray-700 rounded px-3 py-2"
                value={password}
                readOnly
              />
            </div>

            {/* Password Length Slider */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Password Length:</label>
              <input
                type="range"
                min="5"
                max="15"
                step="1"
                value={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                className="w-full bg-gray-700 rounded"
              />
              <span className="text-sm text-gray-400">{passwordLength}</span>
            </div>

            {/* Options */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Character Options:</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeUppercase}
                      onChange={() => setIncludeUppercase(!includeUppercase)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Uppercase
                    </span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeLowercase}
                      onChange={() => setIncludeLowercase(!includeLowercase)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Lowercase
                    </span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeNumbers}
                      onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Numbers
                    </span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeSpecialChars}
                      onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Special Characters
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              className="bg-blue-500 text-white w-full mb-4 px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={generatePassword}
            >
              Generate
            </button>

            {/* Cancel and Save Password Buttons */}
            <div className="flex flex-col space-y-2">
              <button
                className="bg-green-500 text-white w-full px-4 py-2 rounded-md hover:bg-green-600"
                onClick={copyToClipboard}
              >
                Save Password
              </button>
              <button
                className="bg-red-500 text-white w-full px-4 py-2 rounded-md hover:bg-red-600"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
