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
                            <h1>Natalia Grybovska</h1>
                        </div>
                        <div className="row social-panel">
                            <div className="column">
                                <a className="social-button" href="http://github.com/nataliagrybovska" target="_blank">
                                    <i className="big github square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a className="social-button" href="http://www.facebook.com/natalia.grybovska" target="_blank">
                                    <i className="big facebook square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a className="social-button" href="http://instagram.com/natalia.grybovska/" target="_blank">
                                    <i className="big instagram square grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a className="social-button" href="https://telegram.me/NataliaGrybovska" target="_blank">
                                    <i className="big send grey icon link icon"/>
                                </a>
                            </div>
                            <div className="column">
                                <a className="social-button" href="mailto:natasha.grybovska@gmail.com" target="_blank">
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