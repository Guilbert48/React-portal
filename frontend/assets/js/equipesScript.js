

window.sr = ScrollReveal({ reset: true });

sr.reveal('.area', {duration: 1000});
sr.reveal(
'.area-2', 
{
    duration: 3000,
    rotate:{ x:0, y: 80, z:0 }

});
sr.reveal(
'.area-4', 
{
    duration: 3000,
    rotate:{ x: 100, y: 0, z: 200 }

});
