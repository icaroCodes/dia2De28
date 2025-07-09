document.querySelector('.toggle-password').addEventListener('click', function () {
  const container = this.closest('.relative');
  const passwordInput = container.querySelector('input');
  const iconEye = this.querySelector('.icon-eye');
  const iconEyeOff = this.querySelector('.icon-eye-off');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    iconEye.classList.remove('hidden');
    iconEyeOff.classList.add('hidden');
  } else {
    passwordInput.type = 'password';
    iconEye.classList.add('hidden');
    iconEyeOff.classList.remove('hidden');
  }
});
