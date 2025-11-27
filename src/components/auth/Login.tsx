import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Call the success callback
      onLoginSuccess();
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="absolute top-8 left-8 text-3xl font-bold text-blue-800">THIJAR</div>

      {/* Login Form Container */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h2>
          <p className="text-blue-800 text-lg font-medium">Log in to your POS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email/Phone Field */}
          <div>
            <label htmlFor="emailOrPhone" className="block text-gray-900 text-base font-semibold mb-3">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors text-base"
              placeholder="Enter your Email or Mobile Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-900 text-base font-semibold mb-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full py-3 px-4 pr-12 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors text-base disabled:opacity-50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-blue-600 text-white font-bold py-4 px-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors text-lg shadow-lg disabled:opacity-70"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-blue-700 hover:text-blue-900 font-medium transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;