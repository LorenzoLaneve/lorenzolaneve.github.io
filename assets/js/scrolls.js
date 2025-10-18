// A Map to define the scroll thresholds and the corresponding classes.
// Key = CSS Class to be applied
// Value = The minimum window.scrollY position (in pixels) for that class to be active
const scrollClasses = new Map([
    ['scroll-after-intro', 200],          // Add 'is-scrolled' after 100px
]);

const body = document.body;
let isTicking = false;

/**
 * Updates the body classes based on the current scroll position.
 */
function updateScrollClasses() {
    const scrollY = window.scrollY;

    // 2. Iterate through the defined scroll classes and apply/remove them
    for (const [className, threshold] of scrollClasses) {
        if (scrollY >= threshold) {
            // Apply the class if the scroll position is past the threshold
            if (!body.classList.contains(className)) {
                body.classList.add(className);
            }
        } else {
            // Remove the class if the scroll position is above the threshold
            if (body.classList.contains(className)) {
                body.classList.remove(className);
            }
        }
    }

    isTicking = false; // Reset the throttle flag
}

/**
 * Event listener that uses requestAnimationFrame (RAF) for performance.
 */
function handleScroll() {
    if (!isTicking) {
        // Only request a frame if one hasn't been requested already
        window.requestAnimationFrame(updateScrollClasses);
        isTicking = true;
    }
}

// Attach the listener to the window's scroll event
// { passive: true } tells the browser your event handler won't call preventDefault(),
// improving scroll performance.
window.addEventListener('scroll', handleScroll, { passive: true });

// Initial check to apply classes when the page loads (in case it loads scrolled down)
window.addEventListener('load', updateScrollClasses);

// Run an initial check immediately to handle pages that might load at a scrolled position
updateScrollClasses();