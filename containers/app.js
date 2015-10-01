import React from 'react';

var App = React.createClass({
    render: function () {
        return (
            <div className="main-page page">
                <div className="page-content">
                    <div className="ui centered five column grid">
                        <div className="centered column main-img">
                            <img className="ui medium circular image" src="/images/the-sea.jpg"/>
                        </div>
                        <div className="row name-panel">
                            <h2>Natalia Grybovska</h2>
                        </div>
                        <div className="row social-panel">
                            <div className="column">
                                <a href="http://github.com/nataliagrybovska" target="_blank">
                                    <i className="big github square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a href="http://instagram.com/natalia.grybovska/" target="_blank">
                                    <i className="big instagram square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a href="http://www.facebook.com/natasha.gribowski" target="_blank">
                                    <i className="big facebook square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a href="http://soundcloud.com/natalia-grybovska" target="_blank">
                                    <i className="big soundcloud grey square  icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a href="mailto:natasha.grybovska@gmail.com" target="_blank">
                                    <i className="big mail grey icon link icon"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = App;