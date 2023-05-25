const { connect } = require('mongoose');

exports.startConnection = async () => {
  try {
    const db = await connect('mongodb+srv://Yahir:Yahir1234@cluster0.vbtbdwu.mongodb.net/test');
    //mongodb+srv://Yahir:<password>@cluster0.vbtbdwu.mongodb.net/
    console.log('Database is connected');
  } catch (error) {
    throw new Error(error);
  }
}
