// Python Programming Challenges
export const pythonChallenges = [
    {
        id: 'loop_sprite_1',
        title: 'The Counting Spell',
        description: 'Help the Loop Sprite create a spell that counts from 1 to 10',
        starterCode: `# The Loop Sprite needs your help!
# Create a spell that prints numbers 1 through 10

for i in range(1, 11):
    print(i)`,
        solution: `for i in range(1, 11):
    print(i)`,
        hints: [
            'Use a for loop with range()',
            'range(1, 11) gives you numbers 1 through 10',
            'Use print() to display each number'
        ],
        testCases: [
            { input: '', expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' }
        ]
    },
    {
        id: 'function_wizard_1',
        title: 'The Healing Potion Formula',
        description: 'Create a function that calculates healing power based on ingredients',
        starterCode: `# The Potion Master needs a healing formula
# Create a function that takes health_points and multiplier
# Return the total healing amount

def healing_potion(health_points, multiplier):
    # Your code here
    pass

# Test your function
result = healing_potion(50, 2)
print(f"Healing power: {result}")`,
        solution: `def healing_potion(health_points, multiplier):
    return health_points * multiplier

result = healing_potion(50, 2)
print(f"Healing power: {result}")`,
        hints: [
            'Define a function using def keyword',
            'Return the product of health_points and multiplier',
            'Use return statement to send back the result'
        ]
    },
    {
        id: 'list_guardian_1',
        title: 'The Inventory Spell',
        description: 'Manage the magical inventory using Python lists',
        starterCode: `# The Inventory Guardian needs help organizing items
# Create a list of magical items and perform operations

magical_items = ['wand', 'potion', 'scroll']

# Add 'crystal' to the list
# Remove 'potion' from the list
# Print the final inventory

print("Magical Inventory:", magical_items)`,
        solution: `magical_items = ['wand', 'potion', 'scroll']
magical_items.append('crystal')
magical_items.remove('potion')
print("Magical Inventory:", magical_items)`,
        hints: [
            'Use append() to add items to a list',
            'Use remove() to delete specific items',
            'Lists are ordered collections in Python'
        ]
    }
];

export const pythonNPCs = [
    {
        name: 'Loop Sprite',
        position: { x: 300, y: 200 },
        challenges: ['loop_sprite_1'],
        dialogue: [
            "Greetings, young sorcerer! I am the Loop Sprite.",
            "I control the flow of repetitive magic in the Python Forest.",
            "Can you help me create a counting spell?"
        ],
        completedDialogue: [
            "Excellent work! Your loop magic is strong.",
            "You've mastered the art of iteration!"
        ]
    },
    {
        name: 'Function Wizard',
        position: { x: 450, y: 350 },
        challenges: ['function_wizard_1'],
        dialogue: [
            "Welcome to my tower! I am the Function Wizard.",
            "Functions are the building blocks of all magic.",
            "Let me teach you to create reusable spells!"
        ]
    },
    {
        name: 'List Guardian',
        position: { x: 200, y: 400 },
        challenges: ['list_guardian_1'],
        dialogue: [
            "I guard the sacred collections of the Python realm.",
            "Lists hold great power - they can grow and shrink!",
            "Master them, and you'll control magical inventories."
        ]
    }
];