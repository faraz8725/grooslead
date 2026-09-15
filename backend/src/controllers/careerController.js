import Career from "../models/Career.js";

// ADD CAREER
export const addCareer = async (req, res) => {
  try {
    const { title, location, type, description } = req.body;

    if (!title || !location || !type || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, location, type and description are required",
      });
    }

    const career = await Career.create({
      title,
      location,
      type,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Career added successfully",
      career,
    });
  } catch (error) {
    console.error("Add Career Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET ALL CAREERS
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      careers,
    });
  } catch (error) {
    console.error("Get Careers Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// UPDATE CAREER
export const updateCareer = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, type, description } = req.body;

    const career = await Career.findByIdAndUpdate(
      id,
      {
        title,
        location,
        type,
        description,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Career updated successfully",
      career,
    });
  } catch (error) {
    console.error("Update Career Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// DELETE CAREER
export const deleteCareer = async (req, res) => {
  try {
    const { id } = req.params;

    const career = await Career.findByIdAndDelete(id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Career deleted successfully",
    });
  } catch (error) {
    console.error("Delete Career Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};