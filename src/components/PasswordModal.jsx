import React, {  useState } from 'react';
import { FiCopy } from "react-icons/fi";
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import {savePassword} from '../Services/UserService'

export const PasswordModal = (props) => {
 
  const { id } = props;
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [websiteName, setWebsiteName] = useState(''); 
  const [username,setUsername]=useState('')

  const generatePassword = () => {
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
      toast.error('Select at least one condition');
      return;
  }
    const charset = (
      (includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
      (includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
      (includeNumbers ? '0123456789' : '') +
      (includeSpecialChars ? '!@#$%^&*()_+[]{}|;:,.<>?~' : '')
    );

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  const handleSavePassword= async()=>{
    if (!password){
      toast.error('please generate passowrd')
      return
    }
    if (!websiteName || !username){
      toast.error('enter website name and username')
      return
    }

  if (id==='no'){
    toast.error('please login')
    return
  }
  const data={
    password:password,
    username:username,
    website:websiteName,
    user:id
  
  }
  const response = await savePassword(data)
  if(response===201){

    toast.success('saved')
    setModalVisible(false)
    setUsername('')
    setWebsiteName('')
    // window.location.reload();
    
  }else{
    toast.error('please try after some time')
  }
}

  const copyToClipboard = () => {
    if (!password){
      toast.error('generate password first')
      return
    }
    navigator.clipboard.writeText(password)
      .then(() => {
        toast.success('Password copied to clipboard');
       
      })
      .catch((error) => {
        console.error('Failed to copy password: ', error);
      });
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
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={openModal}
      >
        Generate Password
      </button>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Password Generator{id}</h2>

            {/* Password Input Field */}
            <div className="mb-4">
            <Toaster position='top-center' reverseOrder='false' ></Toaster>
              <label className="block text-sm font-medium">Generated Password:</label>
              <div className="flex">
              <input
                type="text"
                className="w-full bg-gray-700 rounded px-3 py-2 flex"
                value={password}
                readOnly
              />
              <button
                className="ml-2 px-3 py-2 bg-primary-700 hover:bg-primary-800 rounded text-white font-medium"
                onClick={copyToClipboard}
              >
               <FiCopy/>
              </button>
            </div>

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

            <div className='flex'>
              <div className="mb-4 mr-4"> {/* Added mr-4 for spacing */}
                <label className="block text-sm font-medium">Website Name:</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded px-3 py-2"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">user Name:</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded px-3 py-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                onClick={handleSavePassword}
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
