window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;

  document.querySelector('.layer0').style.transform = `translateY(${scrolled * 0.45}px)`;
  document.querySelector('.layer1').style.transform = `translateY(${scrolled * 0.3}px)`;
  document.querySelector('.layer2').style.transform = `translateY(${scrolled * 0.2}px)`;
  document.querySelector('.layer3').style.transform = `translateY(${scrolled * 0.1}px)`;
});