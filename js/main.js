(function ($) {
    "use strict";

    // Spinner - Show loading screen before the game starts
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500); // Display spinner for 500ms
    };
    spinner();

    // Sticky Navbar - Optional for game UI (can remove if unnecessary)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Back to top button - Can repurpose for game reset
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        // Reset game or go to the top of the screen
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Game-specific logic
    const gameCanvas = $("#gameCanvas")[0];
    const ctx = gameCanvas.getContext("2d");

    // Game state variables
    let player = { x: 50, y: 50, width: 20, height: 20, color: "blue" };
    let keys = {};

    // Handle keyboard input
    $(document).keydown(function (e) {
        keys[e.key] = true;
    });
    $(document).keyup(function (e) {
        keys[e.key] = false;
    });

    // Update game state
    function updateGame() {
        if (keys["ArrowUp"]) player.y -= 5;
        if (keys["ArrowDown"]) player.y += 5;
        if (keys["ArrowLeft"]) player.x -= 5;
        if (keys["ArrowRight"]) player.x += 5;

        // Prevent player from moving out of bounds
        player.x = Math.max(0, Math.min(gameCanvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(gameCanvas.height - player.height, player.y));
    }

    // Render game objects
    function renderGame() {
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear the canvas

        // Draw player
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    // Game loop
    function gameLoop() {
        updateGame();
        renderGame();
        requestAnimationFrame(gameLoop);
    }

    // Initialize game
    function initGame() {
        gameCanvas.width = window.innerWidth;
        gameCanvas.height = window.innerHeight;
        gameLoop();
    }

    // Start game when the DOM is ready
    $(document).ready(function () {
        initGame();
    });

})(jQuery);