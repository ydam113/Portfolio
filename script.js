function showProject(projectId) {
  window.open('https://github.com/ydam113/' + projectId, '_blank');
}

// Contact form 기본 전송 방지 및 콘솔 출력
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! Thank you :)');
});
