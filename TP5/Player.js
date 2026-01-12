class Player{
    constructor(id, pseudo, skin, coordsX, coordsY){
        this.id = id;
        this.pseudo = pseudo;
        this.skin = skin;
        this.coordsX = coordsX;
        this.coordsY = coordsY;
        
        this.hp = hp;
        this.attaque = attaque;
        this.vitesse = vitesse;
        this.alive = alive;
        this.lvl = lvl;
        this.cooldown = cooldown;
        this.regen = regen;
    }
    update(updateData){
        this.coordsX = updateData.coordsX;
        this.coordsY = updateData.coordsY;
        this.hp = updateData.hp;
        this.attaque = updateData.attaque;
        this.vitesse = updateData.vitesse;
        this.alive = updateData.alive;
        this.lvl = updateData.lvl;
        this.cooldown = updateData.cooldown;
        this.regen = updateData.regen;
    }
}