<script>
  function toggleTheme() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.toggle-theme');
    if (document.body.classList.contains('dark')) {
      btn.textContent = ':sunny: Light Mode';
    } else {
      btn.textContent = ':crescent_moon: Dark Mode';
    }
  }
</script>