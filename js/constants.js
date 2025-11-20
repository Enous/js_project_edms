const ERROR_TYPES = {
  POSITION_EXISTS: 'position_exists', 
  INVALID_FORMAT: 'invalid_format'
};

const ERROR_MESSAGES = {
  [ERROR_TYPES.POSITION_EXISTS]: "Данная должность уже существует в базе данных",
  [ERROR_TYPES.INVALID_FORMAT]: "Некорретный ввод"
};

module.exports = {
  ERROR_TYPES,
  ERROR_MESSAGES
};