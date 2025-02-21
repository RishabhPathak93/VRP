import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, UserPlus, RefreshCw } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const [formData, setFormData] = useState({
    driverName: '',
    licenseNumber: '',
    password: '',
  });

  // Generate a simple captcha
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(captcha);
    setUserCaptchaInput('');
  };

  // Generate initial captcha on component mount
  useState(() => {
    generateCaptcha();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptchaInput.toUpperCase() !== captchaValue) {
      alert('Captcha does not match!');
      generateCaptcha();
      return;
    }
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #000957, #2D336B)' }}>
      <div className="w-full max-w-md space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-6 text-3xl font-extrabold text-center text-white">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-300">
            Join our driver community
          </p>
        </motion.div>

        <motion.form
          className="p-8 mt-8 space-y-6 border shadow-xl bg-white/10 backdrop-blur-lg rounded-xl border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="driver-name" className="block mb-2 text-sm font-medium text-gray-200">
                Driver Name
              </label>
              <input
                id="driver-name"
                name="driver-name"
                type="text"
                required
                className="relative block w-full px-3 py-3 text-white placeholder-gray-500 transition duration-200 border border-gray-600 rounded-lg appearance-none bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Enter your full name"
                value={formData.driverName}
                onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="license-number" className="block mb-2 text-sm font-medium text-gray-200">
                License Number
              </label>
              <input
                id="license-number"
                name="license-number"
                type="text"
                required
                className="relative block w-full px-3 py-3 text-white placeholder-gray-500 transition duration-200 border border-gray-600 rounded-lg appearance-none bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Enter your license number"
                value={formData.licenseNumber}
                onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="relative block w-full px-3 py-3 text-white placeholder-gray-500 transition duration-200 border border-gray-600 rounded-lg appearance-none bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="captcha" className="block mb-2 text-sm font-medium text-gray-200">
                Captcha Verification
              </label>
              <div className="flex items-center p-4 mb-3 space-x-4 border border-gray-600 rounded-lg bg-white/5">
                <div className="flex-1 text-2xl font-bold text-white tracking-[0.3em] text-center" style={{
                  fontFamily: 'monospace',
                  background: 'linear-gradient(45deg, #001A6E, #2D336B)',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                }}>
                  {captchaValue}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2 text-gray-400 transition-colors hover:text-white"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
              <input
                type="text"
                required
                className="relative block w-full px-3 py-3 text-white placeholder-gray-500 transition duration-200 border border-gray-600 rounded-lg appearance-none bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Enter the captcha code"
                value={userCaptchaInput}
                onChange={(e) => setUserCaptchaInput(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition duration-200 border border-transparent rounded-lg group hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              style={{
                background: 'linear-gradient(90deg, #001A6E, #2D336B)',
                boxShadow: '0 4px 6px rgba(0, 9, 87, 0.2)',
              }}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserPlus className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
              </span>
              Sign up
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-blue-400 transition duration-200 hover:text-blue-300">
                Sign in
              </a>
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Signup;