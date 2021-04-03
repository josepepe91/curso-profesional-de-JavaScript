function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

// no usamos arrow function porque this es global

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    })
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.paused = function() {
    return this.media.paused;
}

MediaPlayer.prototype.mute = function() {
    return this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    return this.media.muted = false;
}

MediaPlayer.prototype.muted = function() {
    return this.media.muted;
}

export default MediaPlayer;