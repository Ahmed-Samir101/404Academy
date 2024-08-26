window.onload = () => {

document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.querySelector('.bio').style.display = 'block';
        member.querySelector('.bio').style.opacity = '0';
        setTimeout(() => {
            member.querySelector('.bio').style.opacity = '1';
            member.querySelector('.bio').style.transition = 'opacity 0.4s ease';
        }, 100);
    });

    member.addEventListener('mouseleave', () => {
        member.querySelector('.bio').style.opacity = '0';
        setTimeout(() => {
            member.querySelector('.bio').style.display = 'none';
        }, 400);
    });
});


}