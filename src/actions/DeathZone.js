/* Marks particles found in specified zone dead */
SPARKS.DeathZone = function(zone) {
    this.zone = zone;
};

SPARKS.Extends(SPARKS.DeathZone, SPARKS.Action);

SPARKS.DeathZone.prototype.update = function(emitter, particle, time) {
    
    if (this.zone.contains(particle.position)) {
		particle.isDead = true;
	}

};