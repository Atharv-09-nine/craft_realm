// Java Programming Challenges
export const javaChallenges = [
    {
        id: 'class_noble_1',
        title: 'The Creature Constructor',
        description: 'Create a magical creature class with proper OOP principles',
        starterCode: `// The Class Noble requests a magical creature
public class MagicalCreature {
    private String name;
    private int health;
    private String type;
    
    // Constructor
    public MagicalCreature(String creatureName, int creatureHealth, String creatureType) {
        this.name = creatureName;
        this.health = creatureHealth;
        this.type = creatureType;
    }
    
    // Method to display creature info
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Health: " + health);
        System.out.println("Type: " + type);
    }
    
    // Method to take damage
    public void takeDamage(int damage) {
        health -= damage;
        if (health < 0) health = 0;
        System.out.println(name + " takes " + damage + " damage! Health: " + health);
    }
    
    public static void main(String[] args) {
        MagicalCreature dragon = new MagicalCreature("Flame Dragon", 100, "Fire");
        dragon.displayInfo();
        dragon.takeDamage(25);
    }
}`,
        solution: `public class MagicalCreature {
    private String name;
    private int health;
    private String type;
    
    public MagicalCreature(String creatureName, int creatureHealth, String creatureType) {
        this.name = creatureName;
        this.health = creatureHealth;
        this.type = creatureType;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Health: " + health);
        System.out.println("Type: " + type);
    }
    
    public void takeDamage(int damage) {
        health -= damage;
        if (health < 0) health = 0;
        System.out.println(name + " takes " + damage + " damage! Health: " + health);
    }
    
    public static void main(String[] args) {
        MagicalCreature dragon = new MagicalCreature("Flame Dragon", 100, "Fire");
        dragon.displayInfo();
        dragon.takeDamage(25);
    }
}`,
        hints: [
            'Use private fields for encapsulation',
            'Constructor initializes object state',
            'Methods define object behavior'
        ]
    },
    {
        id: 'interface_ambassador_1',
        title: 'The Magical Contract',
        description: 'Implement interfaces to create magical contracts',
        starterCode: `// The Interface Ambassador teaches contracts
interface Castable {
    void cast();
    int getPower();
}

class FireSpell implements Castable {
    private int power;
    
    public FireSpell(int spellPower) {
        this.power = spellPower;
    }
    
    @Override
    public void cast() {
        System.out.println("Casting Fire Spell with power " + power + "!");
    }
    
    @Override
    public int getPower() {
        return power;
    }
}

public class SpellCaster {
    public static void main(String[] args) {
        Castable spell = new FireSpell(80);
        spell.cast();
        System.out.println("Spell power: " + spell.getPower());
    }
}`,
        solution: `interface Castable {
    void cast();
    int getPower();
}

class FireSpell implements Castable {
    private int power;
    
    public FireSpell(int spellPower) {
        this.power = spellPower;
    }
    
    @Override
    public void cast() {
        System.out.println("Casting Fire Spell with power " + power + "!");
    }
    
    @Override
    public int getPower() {
        return power;
    }
}

public class SpellCaster {
    public static void main(String[] args) {
        Castable spell = new FireSpell(80);
        spell.cast();
        System.out.println("Spell power: " + spell.getPower());
    }
}`,
        hints: [
            'Interfaces define contracts for classes',
            'Use implements keyword to fulfill contracts',
            '@Override ensures proper method implementation'
        ]
    }
];

export const javaNPCs = [
    {
        name: 'Class Noble',
        position: { x: 200, y: 400 },
        challenges: ['class_noble_1'],
        dialogue: [
            "Greetings! I am a Class Noble of the Java Archipelago.",
            "Here, we believe in proper object-oriented design.",
            "Let me teach you to create magnificent creatures!"
        ]
    },
    {
        name: 'Interface Ambassador',
        position: { x: 350, y: 500 },
        challenges: ['interface_ambassador_1'],
        dialogue: [
            "Welcome to the halls of contracts and agreements!",
            "Interfaces ensure all magical beings follow the same rules.",
            "Master them, and your code will be truly portable!"
        ]
    }
];