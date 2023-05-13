const Interview = require('../models/interview');
const Student = require('../models/student');

// Controller actions
module.exports = {
  // Index action
  async index(req, res, next) {
    try {
      const interviews = await Interview.find({});
      res.render('interviews/index', { interviews });
    } catch(err) {
      next(err);
    }
  },

  // New action
  async new(req, res, next) {
    try {
      const students = await Student.find({ status: 'not_placed' });
      res.render('interviews/new', { students });
    } catch(err) {
      next(err);
    }
  },

  // Create action
  async create(req, res, next) {
    try {
      const newInterview = await Interview.create(req.body.interview);
      const student = await Student.findById(req.body.interview.student);
      student.interviews.push(newInterview);
      student.status = 'on_hold';
      await student.save();
      res.redirect('/interviews');
    } catch(err) {
      next(err);
    }
  },

  // Show action
  async show(req, res, next) {
    try {
      const interview = await Interview.findById(req.params.id).populate('student');
      res.render('interviews/show', { interview });
    } catch(err) {
      next(err);
    }
  },

  // Update action
  async update(req, res, next) {
    try {
      const interview = await Interview.findById(req.params.id).populate('student');
      interview.company = req.body.interview.company;
      interview.date = req.body.interview.date;
      interview.save();
      res.redirect(`/interviews/${interview._id}`);
    } catch(err) {
      next(err);
    }
  },

  // Result action
  async result(req, res, next) {
    try {
      const interview = await Interview.findById(req.params.id).populate('student');
      const result = req.body.interview.result;
      interview.student.results.set(interview.company, result);
      await interview.student.save();
      res.redirect(`/interviews/${interview._id}`);
    } catch(err) {
      next(err);
    }
  }
};
