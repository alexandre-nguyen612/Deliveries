/// Etape 1
function addCarToAgent(agent,brand,model,color,power){
    if (typeof brand !== 'string' || typeof model !== 'string' || 
        typeof color !== 'string' || typeof power !== 'string') {
        console.error('Error: All parameters must be strings.');
        return null;

}

/// Etape 3

const car = {
    brand: brand,
    model: model,
    color: color,
    power: power
};

// Ajouter l'objet voiture à l'agent
agent.car = car;

// Retourner l'agent mis à jour
return agent;}

shareThatBeauty(agent)