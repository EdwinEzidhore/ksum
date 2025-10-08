import { useForm } from "react-hook-form";
import axios from "axios";
import { base_url } from "../config/base_url.js";

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${base_url}/api/users/form-sumit`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-red shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Application Form
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Full Name</label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "Date of birth is required" })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Must be at least 10 digits" },
            })}
            placeholder="Enter your phone number"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Short Bio */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium mb-1">Short Bio</label>
          <textarea
            {...register("bio", { required: "Short bio is required" })}
            placeholder="Write a short bio about yourself"
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
