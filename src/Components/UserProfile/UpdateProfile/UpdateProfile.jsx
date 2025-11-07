import React, { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("Abir Rubaiyat");
  const [email, setEmail] = useState("abirr@gmail.com");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="bg-base-100 shadow-lg rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
          Update Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-accent">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-base-300 text-base-content">
                  No Image
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="text-sm text-base-content"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-base-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-base-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-base-content font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full border border-base-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full btn btn-accent text-white font-semibold py-2 rounded-md transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
