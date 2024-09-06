document.addEventListener("DOMContentLoaded", function() {
    function displayAgentInfo(obj) {
        const { age, code, firstName, lastName } = obj;    
        const agentInfo = `My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code} and I'm ${age} years old.`;
        document.querySelector('p').innerText = agentInfo;
        p.innerHTML = agentInfo;
    }

    const agent = {
        age: 57,
        code: "007",
        firstName: "James",
        lastName: "Bond"
    };

    displayAgentInfo(agent);
});
