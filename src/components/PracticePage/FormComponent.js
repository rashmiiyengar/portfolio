import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-500/20 backdrop-blur-2xl shadow-lg rounded-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-violet-700 text-transparent bg-clip-text">Basic Elements</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Select Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-200 font-medium mb-2">Upload File</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-violet-700 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
