function ay(str) {
    return str + 'ay';
  }
  
  function translate(str) {
    if (/^[aeiou]/i.test(str)) {
      return ay(str);
    }
    if (/^[A-Z]/.test(str)) {
      return ay(str[1].toUpperCase() + str.substring(2) + str[0].toLowerCase());
    }
    return ay(str.substring(1) + str[0]);
  }
  
  exports.translate = function (str) {
    return str.replace(/\b\w+\b/g, translate);
  };