document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error('ไม่พบ nav element');
        return;
    }

    const initialNavOffsetTop = nav.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= initialNavOffsetTop) {
            nav.classList.add('scrolled-sticky');
        } else {
            nav.classList.remove('scrolled-sticky');
        }
    });
});
