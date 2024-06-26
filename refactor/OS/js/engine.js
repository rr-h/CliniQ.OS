$(function() {
    // Existing initialization code
    $('#time').jclock();

    // Columnise folders logic
    var fN = $('.folder').length;
    var fH = $('#folders').height() + 100;
    var wH = $(window).height();
    var wW = $(window).width();

    if (fH > wH) {
        var fIH = fH / fN;
        var fpW = wH / fIH;
        fpW = parseInt(fpW);
        var colN = (parseInt(fH / wH) + 1);

        for (let i = 0; i < (colN - 1); i++) {
            $('#folders').after('<div id="folders' + (i + 2) + '" class="folders"/>');
            $('.folder_wrapper').slice((fpW * (i + 1)), ((fpW * 2) * (i + 1))).appendTo('#folders' + (i + 2));
        }
    }

    // Make folders draggable and invert icon when drag starts
    $('.folder').draggable({
        scroll: false,
        start: function() {
            $('.folder img').attr({ src: '../assets/img/disk.gif' });
            $(this).find('img').attr({ src: '../assets/img/disk_black.gif' });
            $('.folder_text').removeClass('folder_text-inverted');
            $(this).find('.folder_text').addClass('folder_text-inverted');
        }
    });

    $('.plant').draggable();

    $('.folder').on("click", function() {
        $('.folder img').attr({ src: '../assets/img/disk.gif' });
        $(this).find('img').attr({ src: '../assets/img/disk_black.gif' });
        $('.folder_text').removeClass('folder_text-inverted');
        $(this).find('.folder_text').addClass('folder_text-inverted');
    });

    // Variable to handle window z-index
    var z = 50;
    var first = true;

    // Load windows on icon double-click
    $('.folder').on("dblclick", function() {
        if (first) {
            first = false;
            $('.note').delay(2000).show('blind', 500).delay(5000).hide('blind', 500);
        }

        var name = $(this).find('.folder_text').html();
        $('#description').fadeOut(2000);
        var icon = $(this).data('src');

        $('#windows').load('dir.php?q=' + icon, function() {
            $('.img_wrapper').each(function() {
                var img = $(this).find('img');
                var t = $(this);
                $(this).imagesLoaded(function() {
                    var speed = Math.floor((Math.random() * 1000) + 500);
                    var wH = $(window).height() - 40;
                    var iH = parseInt(img.attr('height'));
                    var iW = parseInt(img.attr('width'));
                    var holder = t.closest('.img_holder');
                    var iT = parseInt(holder.css('top').slice(0, -2));
                    var fr = 25; // window frame
                    var overflow = (iT + iH + fr) - wH;
                    var iHtot = iH + fr + 30;

                    if (iHtot > wH) {
                        var nH = wH * 0.8;
                        var nW = iW * (nH / iH);
                        img.height(nH).width(nW);
                        t.height(nH).width(nW);
                        overflow = (iT + nH + fr) - wH;
                    }

                    var newTop = iT - overflow - 8;
                    if (overflow > 0) holder.animate({ 'top': newTop }, 1000);
                    img.show('blind', speed);
                });
            });

            $('div.img_holder').draggable({
                start: function() {
                    z += 1;
                    $(this).css({ 'z-index': z });
                }
            }).click(function() {
                z += 1;
                $(this).css({ 'z-index': z });
            });

            $("div.img_holder").on("dblclick", function() {
                $(this).remove();
            });

            $('.window_left').on('mousedown', function() {
                $(this).find('img').attr('src', '../assets/img/window_left-close.gif');
            }).on('mouseup', function() {
                $(this).closest('.img_holder').remove();
            });
        });

        // Invert icon when double-clicked, as when dragged
        $('.folder img').attr({ src: '../assets/img/disk.gif' });
        $(this).find('img').attr({ src: '../assets/img/disk_black.gif' });
        $('.folder_text').removeClass('folder_text-inverted');
        $(this).find('.folder_text').addClass('folder_text-inverted');
    });

    // Reset inverted icon when clicking bg
    $('#bg').click(function() {
        $('.folder img').attr({ src: '../assets/img/disk.gif' });
        $('.folder_text').removeClass('folder_text-inverted');
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location = '/mobile/';
    }

    // New code to handle window pop-up on clicking folder icon
    $('#folders').on('click', '.folder', function() {
        var title = $(this).find('.folder_text').text();
        var src = $(this).data('src');

        // Create the window element
        var windowElement = $(
            '<div class="img_holder ui-draggable ui-draggable-handle" style="top: 50px; left: 50px; z-index: ' + (++z) + ';">' +
            '<div class="window_left"><img src="./assets/img/window_left.gif"></div>' +
            '<div class="window_title_wrapper">' +
            '<div class="window_title">' +
            '<div class="text">' + title + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="window_right"><img src="./assets/img/window_right.gif"></div>' +
            '<div class="window_info"><span>File: ' + src + '</span></div>' +
            '<div class="img_wrapper" style="width: 100%; height: 100%;"><img src="./assets/img/disk.gif" style="height: 100%; width: 100%;"></div>' +
            '</div>'
        );

        // Append to the container
        $('#windows').append(windowElement);

        // Make the window visible and draggable
        windowElement.show().draggable();

        // Bind close functionality to the window left button
        windowElement.find('.window_left').on('mousedown', function() {
            $(this).find('img').attr('src', '../assets/img/window_left-close.gif');
        }).on('mouseup', function() {
            $(this).closest('.img_holder').remove();
        });
    });
});