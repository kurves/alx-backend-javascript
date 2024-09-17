const fs = require('fs').promises;
const path = require('path');

/**
 * Reads the database file and  arrays
 * of first names of students per field.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<object>} - A promise that resolves to an object
 *   with fields as keys and arrays of first names as values.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    const lines = data.trim().split('\n');

    const header = lines[0].split(',');
    const rows = lines.slice(1);

    const result = {};

    rows.forEach(row => {
      const values = row.split(',');
      if (values.length === header.length) {
        const [firstname, , , field] = values;
        
        if (!firstname || !field) return;
        
        if (!result[field]) {
          result[field] = [];
        }
        
        result[field].push(firstname);
      }
    });

    return result;

  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = { readDatabase };

