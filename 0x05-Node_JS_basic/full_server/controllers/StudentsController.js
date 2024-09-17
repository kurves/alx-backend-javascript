const { readDatabase } = require('../utils');

/**
 * Controller for handling student-related requests.
 */
class StudentsController {
  /**
   * Handles the /students endpoin
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('path/to/database.csv');

      res.status(200);
      res.write('This is the list of our students\n');

      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'accent' }));

      fields.forEach(field => {
        const names = data[field];
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the /students/:major endpoint.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('path/to/database.csv');

      if (!data[major]) {
        res.status(500).send('Cannot load the database');
        return;
      }
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

