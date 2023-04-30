import React, { useEffect } from 'react'

export default function Loader() {

    useEffect(() => {

        (function ($) {
            $(window).on('load', function () {
                handlePreloader();
                if ($('body.page-loaded').length) {
                    $('body').addClass('page-done');
                }
                //   enableDefaultMasonry();
            });

            //Hide Loading Box (Preloader)
            function handlePreloader() {
                if ($('.loader-wrap').length) {
                    $('.loader-wrap').delay(300).fadeOut(300);
                }
            }
        })(window.jQuery);

    }, [])




    return (
        <div>
            {/* Preloader */}
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close">x</div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="txt-loading">
                                <span data-text-preloader="S" className="letters-loading">
                                    S
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    I
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>
                                <span data-text-preloader="K" className="letters-loading">
                                    K
                                </span>
                                <span data-text-preloader="R" className="letters-loading">
                                    R
                                </span>
                                <span data-text-preloader="O" className="letters-loading">
                                    O
                                </span>
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="D" className="letters-loading">
                                    D
                                </span>
                                <span data-text-preloader="F" className="letters-loading">
                                    F
                                </span>
                                <span data-text-preloader="O" className="letters-loading">
                                    O
                                </span>
                                <span data-text-preloader="R" className="letters-loading">
                                    R
                                </span>
                                <span data-text-preloader="Y" className="letters-loading">
                                    Y
                                </span>
                                <span data-text-preloader="O" className="letters-loading">
                                    O
                                </span>
                                <span data-text-preloader="U" className="letters-loading">
                                    U
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Preloader End */}
        </div>
    )
}
