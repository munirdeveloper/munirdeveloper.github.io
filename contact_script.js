// script.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      var checkbox = document.getElementById('shareEmail');
  
      if (!checkbox.checked) {
        event.preventDefault();
  
        alert('Please tick the "I am comfortable sharing my email" checkbox before submitting.');
      }
    });
  });
  