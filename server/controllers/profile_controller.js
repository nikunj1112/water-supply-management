import { ProfileModel } from '../models/profile_model.js';
import { AuthCollection } from '../models/auth_model.js';  // 👈 ADD THIS


// ✅ Add User
export const addUser = async (req, res) => {
  const { email, name, phone, address, education, age, exp, image } = req.body;

  try {
    if (!email || !name) {
      return res.status(400).json({ success: false, message: "Email and name are required" });
    }

    const existingUser = await ProfileModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists with this email" });
    }

    const newUser = await ProfileModel.create({
      email,
      name,
      phone,
      address,
      education,
      age,
      exp,
      image
    });

    return res.status(201).json({
      success: true,
      message: "User added successfully",
      data: newUser
    });

  } catch (err) {
    console.error("Add User Error:", err);
    return res.status(500).json({ success: false, message: "Failed to add user", error: err.message });
  }
};


// ✅ Update User
export const updateUser = async (req, res) => {
  const { email, name, phone, address, education, age, exp, image } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required to update user" });
    }

    const updatedUser = await ProfileModel.findOneAndUpdate(
      { email },
      { name, phone, address, education, age, exp, image },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });

  } catch (err) {
    console.error("Update User Error:", err);
    return res.status(500).json({ success: false, message: "Failed to update user", error: err.message });
  }
};


// ✅ Get All Users
export const getAllUser = async (req, res) => {
  try {
    const users = await ProfileModel.find({});
    return res.status(200).json({ success: true, data: users });

  } catch (err) {
    console.error("Get All Users Error:", err);
    return res.status(500).json({ success: false, message: "Failed to fetch users", error: err.message });
  }
};


// ✅ Get User By Email
export const getUserById = async (req, res) => {
  const { email } = req.params;

  try {
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const user = await ProfileModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });

  } catch (err) {
    console.error("Get User Error:", err);
    return res.status(500).json({ success: false, message: "Failed to fetch user", error: err.message });
  }
};


// ✅ Delete User
export const deleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required to delete user" });
    }

    await ProfileModel.deleteOne({ email });
    await AuthCollection.deleteOne({ email }); // 👈 Also delete from auth

    return res.status(200).json({ success: true, message: "User deleted successfully" });

  } catch (err) {
    console.error("Delete User Error:", err);
    return res.status(500).json({ success: false, message: "Failed to delete user", error: err.message });
  }
};


// ✅ Update User Role (Admin Only)

export const updateUserRole = async (req, res) => {
  try {
    const { email, role } = req.body;

    if (!email || !role) {
      return res.status(400).json({
        success: false,
        message: "Email and role are required"
      });
    }

    if (!["admin", "delivery"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role"
      });
    }

    const user = await AuthCollection.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // 🔥 IMPORTANT: Protect existing admin
    if (user.role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin role cannot be changed"
      });
    }

    user.role = role;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Role updated successfully",
      role: user.role
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update role",
      error: error.message
    });
  }
};