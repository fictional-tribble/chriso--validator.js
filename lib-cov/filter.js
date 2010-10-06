/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['filter.js']) {
  _$jscoverage['filter.js'] = [];
  _$jscoverage['filter.js'][1] = 0;
  _$jscoverage['filter.js'][3] = 0;
  _$jscoverage['filter.js'][4] = 0;
  _$jscoverage['filter.js'][5] = 0;
  _$jscoverage['filter.js'][8] = 0;
  _$jscoverage['filter.js'][9] = 0;
  _$jscoverage['filter.js'][12] = 0;
  _$jscoverage['filter.js'][13] = 0;
  _$jscoverage['filter.js'][14] = 0;
  _$jscoverage['filter.js'][17] = 0;
  _$jscoverage['filter.js'][18] = 0;
  _$jscoverage['filter.js'][19] = 0;
  _$jscoverage['filter.js'][20] = 0;
  _$jscoverage['filter.js'][23] = 0;
  _$jscoverage['filter.js'][24] = 0;
  _$jscoverage['filter.js'][25] = 0;
  _$jscoverage['filter.js'][26] = 0;
  _$jscoverage['filter.js'][29] = 0;
  _$jscoverage['filter.js'][30] = 0;
  _$jscoverage['filter.js'][31] = 0;
  _$jscoverage['filter.js'][34] = 0;
  _$jscoverage['filter.js'][35] = 0;
  _$jscoverage['filter.js'][36] = 0;
  _$jscoverage['filter.js'][38] = 0;
  _$jscoverage['filter.js'][41] = 0;
  _$jscoverage['filter.js'][42] = 0;
  _$jscoverage['filter.js'][43] = 0;
  _$jscoverage['filter.js'][46] = 0;
  _$jscoverage['filter.js'][47] = 0;
  _$jscoverage['filter.js'][48] = 0;
  _$jscoverage['filter.js'][53] = 0;
  _$jscoverage['filter.js'][54] = 0;
  _$jscoverage['filter.js'][55] = 0;
  _$jscoverage['filter.js'][57] = 0;
  _$jscoverage['filter.js'][59] = 0;
  _$jscoverage['filter.js'][64] = 0;
  _$jscoverage['filter.js'][65] = 0;
  _$jscoverage['filter.js'][66] = 0;
  _$jscoverage['filter.js'][68] = 0;
  _$jscoverage['filter.js'][70] = 0;
}
_$jscoverage['filter.js'][1]++;
var Filter = exports.Filter = (function () {
});
_$jscoverage['filter.js'][3]++;
exports.sanitize = (function (str) {
  _$jscoverage['filter.js'][4]++;
  var f = new Filter();
  _$jscoverage['filter.js'][5]++;
  return f.sanitize(str);
});
_$jscoverage['filter.js'][8]++;
Filter.prototype.modify = (function (str) {
  _$jscoverage['filter.js'][9]++;
  this.str = str;
});
_$jscoverage['filter.js'][12]++;
Filter.prototype.sanitize = (function (str) {
  _$jscoverage['filter.js'][13]++;
  this.str = str;
  _$jscoverage['filter.js'][14]++;
  return this;
});
_$jscoverage['filter.js'][17]++;
Filter.prototype.ltrim = (function (replace) {
  _$jscoverage['filter.js'][18]++;
  this.str = this.str.replace(/^(?:\s|\t|\r|\n)+/g, "");
  _$jscoverage['filter.js'][19]++;
  this.modify(this.str);
  _$jscoverage['filter.js'][20]++;
  return this.str;
});
_$jscoverage['filter.js'][23]++;
Filter.prototype.rtrim = (function (replace) {
  _$jscoverage['filter.js'][24]++;
  this.str = this.str.replace(/(?:\s|\t|\r|\n)+$/g, "");
  _$jscoverage['filter.js'][25]++;
  this.modify(this.str);
  _$jscoverage['filter.js'][26]++;
  return this.str;
});
_$jscoverage['filter.js'][29]++;
Filter.prototype.trim = (function (replace) {
  _$jscoverage['filter.js'][30]++;
  this.modify(this.str.replace(/^(?:\s|\t|\r|\n)+|(?:\s|\t|\r|\n)+$/g, ""));
  _$jscoverage['filter.js'][31]++;
  return this.str;
});
_$jscoverage['filter.js'][34]++;
Filter.prototype.ifNull = (function (replace) {
  _$jscoverage['filter.js'][35]++;
  if (! this.str || this.str === "") {
    _$jscoverage['filter.js'][36]++;
    this.modify(replace);
  }
  _$jscoverage['filter.js'][38]++;
  return this.str;
});
_$jscoverage['filter.js'][41]++;
Filter.prototype.toFloat = (function () {
  _$jscoverage['filter.js'][42]++;
  this.modify(parseFloat(this.str));
  _$jscoverage['filter.js'][43]++;
  return this.str;
});
_$jscoverage['filter.js'][46]++;
Filter.prototype.toInt = (function () {
  _$jscoverage['filter.js'][47]++;
  this.modify(parseInt(this.str));
  _$jscoverage['filter.js'][48]++;
  return this.str;
});
_$jscoverage['filter.js'][53]++;
Filter.prototype.toBoolean = (function () {
  _$jscoverage['filter.js'][54]++;
  if (! this.str || this.str == "0" || this.str == "false" || this.str == "") {
    _$jscoverage['filter.js'][55]++;
    this.modify(false);
  }
  else {
    _$jscoverage['filter.js'][57]++;
    this.modify(true);
  }
  _$jscoverage['filter.js'][59]++;
  return this.str;
});
_$jscoverage['filter.js'][64]++;
Filter.prototype.toBooleanStrict = (function () {
  _$jscoverage['filter.js'][65]++;
  if (this.str == "1" || this.str == "true") {
    _$jscoverage['filter.js'][66]++;
    this.modify(true);
  }
  else {
    _$jscoverage['filter.js'][68]++;
    this.modify(false);
  }
  _$jscoverage['filter.js'][70]++;
  return this.str;
});
_$jscoverage['filter.js'].source = ["var Filter = exports.Filter = function() {}","","exports.sanitize = function(str) {","    var f = new Filter();","    return f.sanitize(str);","}","","Filter.prototype.modify = function(str) {","    this.str = str;","}","","Filter.prototype.sanitize = function(str) {","    this.str = str;","    return this;","}","","Filter.prototype.ltrim = function(replace) {","    this.str = this.str.replace(/^(?:\\s|\\t|\\r|\\n)+/g, '');","    this.modify(this.str);","    return this.str;","}","","Filter.prototype.rtrim = function(replace) {","    this.str = this.str.replace(/(?:\\s|\\t|\\r|\\n)+$/g, '');","    this.modify(this.str);","    return this.str;","}","","Filter.prototype.trim = function(replace) {","    this.modify(this.str.replace(/^(?:\\s|\\t|\\r|\\n)+|(?:\\s|\\t|\\r|\\n)+$/g, ''));","    return this.str;","}","","Filter.prototype.ifNull = function(replace) {","    if (!this.str || this.str === '') {","        this.modify(replace);","    }","    return this.str;","}","","Filter.prototype.toFloat = function() {","    this.modify(parseFloat(this.str));","    return this.str;","}","","Filter.prototype.toInt = function() {","    this.modify(parseInt(this.str));","    return this.str;","}","","//Any strings with length &gt; 0 (except for '0' and 'false') are considered true,","//all other strings are false","Filter.prototype.toBoolean = function() {","    if (!this.str || this.str == '0' || this.str == 'false' || this.str == '') {","        this.modify(false);","    } else {","        this.modify(true);","    }","    return this.str;","}","","//String must be equal to '1' or 'true' to be considered true, all other strings","//are false","Filter.prototype.toBooleanStrict = function() {","    if (this.str == '1' || this.str == 'true') {","        this.modify(true);","    } else {","        this.modify(false);","    }","    return this.str;","}"];
