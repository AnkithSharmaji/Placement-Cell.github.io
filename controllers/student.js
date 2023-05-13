const Student = require('../models/student');

// Controller actions
module.exports = {
  // Index action
  async index(req, res, next) {
    try {
      const students = await Student.find({});
      res.render('students/index', { students });
    } catch(err) {
      next(err);
    }
  },

  // New action
  new(req, res, next) {
    res.render('students/new');
  },

  // Create action
  async create(req, res, next) {
    try {
      const newStudent = await Student.create(req.body.student);
      res.redirect('/students');
    } catch(err) {
      next(err);
    }
  },

  // Edit action
  async edit(req, res, next) {
    try {
      const student = await Student.findById(req.params.id);
      res.render('students/edit', { student });
    } catch(err) {
      next(err);
    }
  },

  // Update action
  async update(req, res, next) {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body.student);
      res.redirect('/students');
    } catch(err) {
      next(err);
    }
  },

  // Delete action
  async delete(req, res, next) {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      res.redirect('/students');
    } catch(err) {
      next(err);
    }
  }
};
