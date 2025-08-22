// C++ Programming Challenges
export const cppChallenges = [
    {
        id: 'memory_guardian_1',
        title: 'The Pointer Ritual',
        description: 'Learn to manage magical energy using C++ pointers',
        starterCode: `// The Memory Guardian teaches pointer magic
#include <iostream>
using namespace std;

int main() {
    int magical_energy = 100;
    
    // Create a pointer to magical_energy
    int* energy_ptr = &magical_energy;
    
    // Use the pointer to double the energy
    *energy_ptr = *energy_ptr * 2;
    
    cout << "Magical Energy: " << magical_energy << endl;
    
    return 0;
}`,
        solution: `#include <iostream>
using namespace std;

int main() {
    int magical_energy = 100;
    int* energy_ptr = &magical_energy;
    *energy_ptr = *energy_ptr * 2;
    cout << "Magical Energy: " << magical_energy << endl;
    return 0;
}`,
        hints: [
            'Use & to get the address of a variable',
            'Use * to dereference a pointer',
            'Pointers allow indirect access to memory'
        ]
    },
    {
        id: 'class_architect_1',
        title: 'The Spell Structure',
        description: 'Build a magical spell class with proper encapsulation',
        starterCode: `// The Class Architect needs a spell blueprint
#include <iostream>
#include <string>
using namespace std;

class Spell {
private:
    string name;
    int power;
    
public:
    // Constructor
    Spell(string spell_name, int spell_power) {
        name = spell_name;
        power = spell_power;
    }
    
    // Method to cast the spell
    void cast() {
        cout << "Casting " << name << " with power " << power << "!" << endl;
    }
};

int main() {
    Spell fireball("Fireball", 75);
    fireball.cast();
    
    return 0;
}`,
        solution: `#include <iostream>
#include <string>
using namespace std;

class Spell {
private:
    string name;
    int power;
    
public:
    Spell(string spell_name, int spell_power) {
        name = spell_name;
        power = spell_power;
    }
    
    void cast() {
        cout << "Casting " << name << " with power " << power << "!" << endl;
    }
};

int main() {
    Spell fireball("Fireball", 75);
    fireball.cast();
    return 0;
}`,
        hints: [
            'Classes encapsulate data and methods',
            'Use private for data protection',
            'Constructors initialize object state'
        ]
    }
];

export const cppNPCs = [
    {
        name: 'Memory Guardian',
        position: { x: 500, y: 300 },
        challenges: ['memory_guardian_1'],
        dialogue: [
            "I am the Memory Guardian of the C++ Citadels.",
            "Here, we control the very essence of computer memory.",
            "Pointers are our most powerful tools - use them wisely!"
        ]
    },
    {
        name: 'Class Architect',
        position: { x: 600, y: 200 },
        challenges: ['class_architect_1'],
        dialogue: [
            "Welcome to the halls of structured magic!",
            "I design the blueprints for all magical constructs.",
            "Learn to build with classes, and your spells will be mighty!"
        ]
    }
];