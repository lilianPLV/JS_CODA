class Player{
    constructor(id, pseudo, skin, coordsX, coordsY){
        this.id = id;
        this.pseudo = pseudo;
        this.skin = skin;
        this.coordsX = coordsX;
        this.coordsY = coordsY;
        
        // this.hp = hp;
        // this.attaque = attaque;
        // this.vitesse = vitesse;
        this.isAlive = true;
        // this.lvl = lvl;
        // this.cooldown = cooldown;
        // this.regen = regen;
        
        this.isWalking = false;
        this.walkSpriteDuration = 2;
        this.walkSpriteIndex = 0;
        this.walkSpriteNumber = 9;
        this.currentWalkSpriteStep = 0;

        this.isAttacking = false;
        this.attackSpriteDuration = 2;
        this.attackSpriteIndex = 0;
        this.attackSpriteNumber = 6;
        this.currentAttackSpriteStep = 0;

        this.isDying = true;
        this.dyingSpriteDuration = 2;
        this.dyingSpriteIndex = 0;
        this.dyingSpriteNumber = 6;
        this.currentDyingSpriteStep = 0;
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

        this.isWalking = updateData.isWalking;

        this.isAttacking = updateData.isAttacking;

        this.isDying = updateData.isDying;
    }
    animate(){
        //The player is walking
        if (this.isWalking){
            this.currentWalkSpriteStep++;
            if (this.currentWalkSpriteStep >= this.walkSpriteDuration){
                this.currentWalkSpriteStep = 0;
                this.walkSpriteIndex++;
            }
            if (this.walkSpriteIndex >= this.walkSpriteNumber){
                this.walkSpriteIndex = 0;
            }
        }
        //The player is attacking
        else if (this.isAttacking){
            this.currentAttackSpriteStep++;
            if (this.currentAttackSpriteStep >= this.attackSpriteDuration){
                this.currentAttackSpriteStep = 0;
                this.attackSpriteIndex++;
            }
            if (this.attackSpriteIndex >= this.attackSpriteNumber){
                this.attackSpriteIndex = 0;
            }
        }
        //The player is dying
        else if (this.isDying){
            this.currentDyingSpriteStep++;
            if (this.currentDyingSpriteStep >= this.dyingSpriteDuration){
                this.currentDyingSpriteStep = 0;
                this.dyingSpriteIndex++;
            }
            if (this.dyingSpriteIndex >= this.dyingSpriteNumber){
                this.isAlive = false;
            }
        }
        //The player is idle
        else{
            this.walkSpriteIndex = 0;
        }
    // console.log("Walk animation :\n");
    // console.log("isWalking = ", this.isWalking);
    // console.log("walkSriteIndex = ",this.walkSpriteIndex);
    // console.log("this.currentWalk = ",this.currentWalkSpriteStep);

    // console.log("Attack animation :\n");
    // console.log("isAttacking = ", this.isAttacking);
    // console.log("attackSriteIndex = ",this.attackSpriteIndex);
    // console.log("this.currentAttack = ",this.currentAttackSpriteStep);

    console.log("Dying Animation : \n");
    console.log("isDying = ", this.isDying);
    console.log("DyingSpriteIndex = ",this.dyingSpriteIndex);
    console.log("this.currentdyingSpriteStep = ",this.currentDyingSpriteStep)
    console.log("isAlive", this.isAlive);
    }
}
AAA = new Player(1, "AAA", 1, 1, 1);
for (let i = 0;i<20;i++){
    AAA.animate();
}