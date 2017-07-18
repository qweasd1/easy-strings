/**
 * Created by tony on 7/16/17.
 */
'use strict'
// should support Captialize, CamelCase, Snake, Const (ALL_UPPER_CASE)


// helpers

function isUpper(charCode) {
  return charCode >64 && charCode < 91
}

function _extractSegementsFromSnake(str,snackchar) {
  return str.split(snackchar)
}

function _extractSegementsFromCamel(str) {
  let startCursor = 0
  let segments = []
  for (let i = 0; i< str.length; i ++){
    if (isUpper(str.charCodeAt(i))) {
      segments.push(str.substring(startCursor,i).toLowerCase())
      startCursor = i
    }
  }
  segments.push(str.substr(startCursor).toLowerCase())
  return segments
}

function _extractSegementsFromCapitalize(str) {
  let startCursor = 0
  let segments = []
  for (let i = 0; i< str.length; i ++){
    if (isUpper(str.charCodeAt(i))) {
      segments.push(str.substring(startCursor,i).toLowerCase())
      startCursor = i
    }
  }
  segments.push(str.substr(startCursor).toLowerCase())
  segments.shift()
  return segments
}


function capitalize(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substr(1).toLowerCase()
  }
  else {
    return str
  }
}

// remove extension
function basename(str) {
  let lastIndexOfDot = str.lastIndexOf(".")
  if (lastIndexOfDot !== -1) {
    return str.substring(0,lastIndexOfDot)
  }
  else {
    return str
  }
}

function ext(str) {
  let lastIndexOfDot = str.lastIndexOf(".")
  if (lastIndexOfDot !== -1) {
    return str.substr(lastIndexOfDot + 1)
  }
  else {
    return ""
  }
}

function snakeToCamel(str, snackChar="-") {
  let segments = _extractSegementsFromSnake(str,snackChar)
  let leading = segments.shift().toLowerCase()
  return leading + segments.map((x)=>capitalize(x)).join("")
  
}

function snakeToCapitalize(str, snackChar = "-") {
  let segments = _extractSegementsFromSnake(str,snackChar)
  
  return segments.map((x)=>capitalize(x)).join("")
}

function camelToSnake(str,snackChar="-") {
  let segments = _extractSegementsFromCamel(str)
  return segments.join(snackChar)
}

function camelToCapitalize(str) {
  return str[0].toUpperCase() + str.substr(1)
}

function capitalizeToSnake(str,snackChar="-") {
  let segments = _extractSegementsFromCapitalize(str)
  return segments.join(snackChar)
}

function capitalizeToCamel(str) {
  return str[0].toLowerCase() + str.substr(1)
}

function toConst(str, type = "camel",snackChar="-") {
  switch (type){
    case "camel":
      return _extractSegementsFromCamel(str).map(x=>x.toUpperCase()).join("_")
    // short hand for capitalize
    case "cap":
      return _extractSegementsFromCapitalize(str).map(x=>x.toUpperCase()).join("_")
    case "snake":
      return _extractSegementsFromSnake(str,snackChar).map(x=>x.toUpperCase()).join("_")
      
  }
}

function changeExt(name, newExt) {
  return basename(name) + "." + newExt
}

module.exports = {
  capitalize,
  basename,
  ext,
  snakeToCamel,
  snakeToCapitalize,
  camelToSnake,
  camelToCapitalize,
  capitalizeToCamel,
  capitalizeToSnake,
  toConst,
  changeExt
}