document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('achievements-table');
  const rows = table.querySelectorAll('tr[data-tooltip]');
  rows.forEach(row => {
    row.style.cursor = 'pointer';
    row.style.transition = 'transform 0.3s, box-shadow 0.3s';
    row.addEventListener('mouseenter', () => {
      row.style.transform = 'scale(1.05) translateY(-5px)';
      row.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
      // Show tooltip (add div or use title)
    });
    row.addEventListener('mouseleave', () => {
      row.style.transform = 'scale(1)';
      row.style.boxShadow = 'none';
    });
  });
  // Add search input above table for filtering
});
